import { createLazyFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createLazyFileRoute('/faq')({
  component: FAQPage,
});

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How does the Anti Nuke security mechanism work?",
    a: "Anti Nuke actively monitors raw Discord gateway events (e.g. channel deletion, role removal, member kick/ban actions). If an administrator triggers actions above your defined threshold in under 5 seconds, Titanium intercepts, strips the admin of all roles, restores deleted entities, and alerts the guild owner."
  },
  {
    q: "Will Titanium Security add latency or lag to my server?",
    a: "No. Titanium is written in a compiled, event-driven architecture and hosted on globally distributed nodes. Commands and messages are parsed in under 15ms, making its operations completely transparent to members."
  },
  {
    q: "Can I whitelist specific administrators from triggering punishments?",
    a: "Yes. Use the \`/antinuke whitelist @user\` command to add trusted administrators. Whitelisted users can create channels, update roles, and manage members without triggering safety containment alerts."
  },
  {
    q: "How do I set up the verification gate?",
    a: "Run the \`/verification setup\` command. Titanium will create a secured verification channel, configure permissions so unverified members cannot see other channels, and post a button panel. Joining members must solve an image CAPTCHA or confirm OAuth before they talk."
  },
  {
    q: "Do you support custom bot profile branding (custom avatars and names)?",
    a: "Yes. Our Premium package allows you to use your own Discord Developer portal bot token. Members will see your custom name, custom avatar, and presence, while running the Titanium backend engine."
  },
  {
    q: "How can I purchase a subscription, and what is your refund policy?",
    a: "Subscriptions are configured via our support server billing Desk. We support all global cards and PayPal. We offer a 14-day refund policy, no questions asked—just contact staff on our Discord."
  },
  {
    q: "What happens if the bot goes offline?",
    a: "Titanium Security operates on redunant gateway connections with an active 99.99% uptime SLA. In the rare event of a cluster reboot, secondary backup nodes take over connection gates automatically."
  }
];

function FAQAccordionItem({ item, idx }: { item: FAQItem; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass overflow-hidden rounded-2xl transition hover:bg-white/[0.04]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-5 p-6 text-left font-display text-sm font-bold text-foreground"
      >
        <span>{item.q}</span>
        <span className="grid size-6 place-items-center rounded-lg bg-white/5 text-muted-foreground">
          {open ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="border-t border-border/40 p-6 pt-0 text-xs leading-relaxed text-muted-foreground">
              <p className="mt-4">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions."
        sub="Everything you need to know about Titanium Security features, billing, and server whitelisting."
      />
      <section className="mx-auto max-w-3xl space-y-4 px-6 pb-28">
        {faqs.map((faq, idx) => (
          <FAQAccordionItem key={idx} item={faq} idx={idx} />
        ))}
      </section>
    </SiteShell>
  );
}
