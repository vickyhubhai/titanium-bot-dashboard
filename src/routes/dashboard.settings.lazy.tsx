import { createLazyFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { Download, Upload, Save, Palette, Globe, RotateCcw } from "lucide-react";
import { useState } from "react";

export const Route = createLazyFileRoute('/dashboard/settings')({
  component: SettingsPage,
});

const themes = [
  { k: "obsidian", c: ["#0a0a14", "#6b6bff"] },
  { k: "ember", c: ["#1a0d0d", "#ff6b8a"] },
  { k: "forest", c: ["#08120e", "#5cffb5"] },
  { k: "solar", c: ["#1a1308", "#ffc66b"] },
];

const langs = ["English", "Español", "Français", "Deutsch", "Português", "日本語", "हिन्दी"];

function SettingsPage() {
  const [theme, setTheme] = useState("obsidian");
  const [lang, setLang] = useState("English");
  const [saved, setSaved] = useState(false);

  return (
    <>
      <Topbar title="Settings" subtitle="Personal preferences, backups and integrations." />
      <div className="grid gap-6 p-6 lg:p-10">
        <section className="glass rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <Palette className="size-4 text-brand" />
            <h3 className="font-display text-lg font-bold">Theme</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {themes.map((t) => (
              <button
                key={t.k}
                onClick={() => setTheme(t.k)}
                className={`group flex items-center gap-3 rounded-xl p-3 transition-all ${theme === t.k ? "bg-white/5 ring-2 ring-brand" : "glass-subtle hover:bg-white/10"}`}
              >
                <div className="flex gap-1">
                  {t.c.map((c) => <span key={c} className="size-5 rounded-full" style={{ background: c }} />)}
                </div>
                <span className="text-sm font-medium capitalize">{t.k}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="glass rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <Globe className="size-4 text-brand" />
            <h3 className="font-display text-lg font-bold">Language</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-4 py-1.5 text-xs transition-colors ${lang === l ? "bg-brand text-white" : "glass-subtle hover:bg-white/10"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </section>

        <section className="glass rounded-2xl p-6">
          <h3 className="mb-4 font-display text-lg font-bold">Backup & sync</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            <button className="glass-subtle flex items-center justify-center gap-2 rounded-xl py-3 text-sm hover:bg-white/10">
              <Download className="size-4" /> Export settings
            </button>
            <button className="glass-subtle flex items-center justify-center gap-2 rounded-xl py-3 text-sm hover:bg-white/10">
              <Upload className="size-4" /> Import settings
            </button>
            <button className="glass-subtle flex items-center justify-center gap-2 rounded-xl py-3 text-sm hover:bg-white/10">
              <RotateCcw className="size-4" /> Restore backup
            </button>
          </div>
        </section>

        <div className="flex items-center justify-end gap-3">
          {saved && <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">Saved</span>}
          <button
            onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 1600); }}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-semibold text-white"
          >
            <Save className="size-4" /> Save changes
          </button>
        </div>
      </div>
    </>
  );
}