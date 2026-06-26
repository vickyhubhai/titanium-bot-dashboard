import { useEffect, useState, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, Terminal, BookOpen, FileText, CornerDownLeft, X } from "lucide-react";

interface SearchItem {
  title: string;
  category: "Pages" | "Commands" | "Documentation" | "Blog";
  description: string;
  url: string;
}

const SEARCH_INDEX: SearchItem[] = [
  // Pages
  { title: "Home", category: "Pages", description: "Titanium Security main landing page and platform features.", url: "/" },
  { title: "Features", category: "Pages", description: "Review our security, moderation and utility features.", url: "/features" },
  { title: "Modules Showcase", category: "Pages", description: "Deep dive into Antinuke, Automod, Logging, and Tickets.", url: "/modules" },
  { title: "Premium Plans", category: "Pages", description: "Compare Free, Premium and Enterprise tiers.", url: "/premium" },
  { title: "Commands Index", category: "Pages", description: "Searchable list of all Titanium Security bot commands.", url: "/commands" },
  { title: "Technical Support Hub", category: "Pages", description: "Discord invite and support options.", url: "/support" },
  { title: "Uptime Status", category: "Pages", description: "Live service indicators for bot operations and API.", url: "/status" },
  { title: "Blog Hub", category: "Pages", description: "Platform engineering and community security notes.", url: "/blog" },
  { title: "Titanium vs Wick Bot", category: "Pages", description: "Why Titanium Security is the modern Wick alternative.", url: "/vs/wick" },
  { title: "Security Disclosure", category: "Pages", description: "Our responsible disclosure and reporting policy.", url: "/security" },
  { title: "Contact Sales", category: "Pages", description: "Submit sales queries or email support.", url: "/contact" },
  { title: "Roadmap", category: "Pages", description: "What we are working on for the bot.", url: "/roadmap" },
  { title: "Integrations", category: "Pages", description: "Third-party connection modules.", url: "/integrations" },
  { title: "Partners Program", category: "Pages", description: "Referral and partnership programs.", url: "/partners" },
  { title: "Careers", category: "Pages", description: "Open positions at Titanium Security.", url: "/careers" },
  
  // Commands
  { title: "/setup", category: "Commands", description: "Run interactive setup wizard to configure the bot.", url: "/docs#bot-setup" },
  { title: "/antinuke enable", category: "Commands", description: "Enable real-time antinuke interception triggers.", url: "/docs#configuration" },
  { title: "/automod config", category: "Commands", description: "Configure anti-spam, link filters, and triggers.", url: "/docs#configuration" },
  { title: "/ticket setup", category: "Commands", description: "Deploy interactive ticket buttons in support channel.", url: "/docs#configuration" },
  { title: "/logs channel", category: "Commands", description: "Bind live forensic logs stream to your channel.", url: "/docs#bot-setup" },
  { title: "/verification setup", category: "Commands", description: "Set up secure Discord oauth gatekeeping.", url: "/docs#bot-setup" },

  // Documentation Chapters
  { title: "Getting Started Guide", category: "Documentation", description: "Quickstart onboarding and installation sequence.", url: "/docs#getting-started" },
  { title: "Bot Setup and logs", category: "Documentation", description: "Initial logs binding and configuration guides.", url: "/docs#bot-setup" },
  { title: "Role Hierarchy Configuration", category: "Documentation", description: "How to order Discord permissions for optimal security.", url: "/docs#permissions" },
  { title: "Commands Usage Guide", category: "Documentation", description: "Autocompletes, syntaxes and argument details.", url: "/docs#commands" },
  { title: "Troubleshooting Guide", category: "Documentation", description: "Common issues like missing permissions fixed.", url: "/docs#troubleshooting" },

  // Blog Posts
  { title: "Anatomy of a Discord nuke", category: "Blog", description: "How Titanium containment stops attacks in under 200ms.", url: "/blog/anatomy-of-a-nuke" },
  { title: "Automod declarative rulesets", category: "Blog", description: "Replacing messy regex with readable policies.", url: "/blog/automod-philosophy" },
  { title: "Redesigning Ticket queues", category: "Blog", description: "Threaded ticket pipelines built from first principles.", url: "/blog/tickets-redesigned" },
  { title: "Bot latency targets (p99)", category: "Blog", description: "Why sub-50ms queue response matters during raids.", url: "/blog/perf-budget" }
];

export function SearchDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>(SEARCH_INDEX);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Search logic
  useEffect(() => {
    if (!query) {
      setResults(SEARCH_INDEX.slice(0, 8)); // Top suggestions when empty
      setSelectedIndex(0);
      return;
    }

    const filtered = SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 10)); // Limit to 10 results
    setSelectedIndex(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex].url);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleSelect = (url: string) => {
    navigate({ to: url as any });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[15vh]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Box */}
      <div 
        ref={containerRef}
        className="glass w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Input area */}
        <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.02] px-4 py-3.5">
          <Search className="size-4 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands, guides, posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground text-foreground"
          />
          <button 
            onClick={onClose}
            className="rounded-lg p-1 text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
            aria-label="Close search"
          >
            <X className="size-3.5" />
          </button>
        </div>

        {/* Results area */}
        <div className="max-h-[300px] overflow-y-auto p-2" role="listbox">
          {results.length > 0 ? (
            results.map((item, idx) => {
              const isActive = idx === selectedIndex;
              const Icon = item.category === "Commands" 
                ? Terminal 
                : item.category === "Documentation" 
                  ? BookOpen 
                  : item.category === "Blog" 
                    ? FileText 
                    : FileText;

              return (
                <div
                  key={`${item.title}-${idx}`}
                  onClick={() => handleSelect(item.url)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 transition-colors ${
                    isActive 
                      ? "bg-brand text-white shadow-lg shadow-brand/20" 
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                  }`}
                  role="option"
                  aria-selected={isActive}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className={`size-4 shrink-0 ${isActive ? "text-white" : "text-brand"}`} />
                    <div className="min-w-0">
                      <div className={`text-xs font-semibold ${isActive ? "text-white" : "text-foreground"}`}>
                        {item.title}
                      </div>
                      <div className={`truncate text-[10px] ${isActive ? "text-white/80" : "text-muted-foreground"}`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`rounded px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-wider ${
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "bg-white/5 text-muted-foreground"
                    }`}>
                      {item.category}
                    </span>
                    {isActive && <CornerDownLeft className="size-3 opacity-60" />}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-4 text-center text-xs text-muted-foreground">
              No results found for "{query}"
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-white/5 bg-white/[0.01] px-4 py-2 font-mono text-[9px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Navigate: <span className="font-sans border border-white/10 rounded px-1 py-0.5">↑↓</span></span>
            <span>Select: <span className="font-sans border border-white/10 rounded px-1 py-0.5">Enter</span></span>
          </div>
          <div>Esc to close</div>
        </div>
      </div>
    </div>
  );
}
