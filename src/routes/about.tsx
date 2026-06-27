import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: "About — Sentinel" },
      { name: "description", content: "Sentinel is built by a small team obsessed with digital safety. Learn the story, the principles, and the people." },
      { property: "og:title", content: "About — Sentinel" },
      { property: "og:description", content: "The story, principles, and team behind Sentinel." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Sentinel",
        url: "https://astral-dashboard-73.lovable.app/about",
        description: "The story, principles, and team behind Sentinel — a small team obsessed with digital safety.",
        mainEntity: {
          "@type": "Organization",
          name: "Sentinel",
          url: "https://astral-dashboard-73.lovable.app",
          description: "Sentinel protects Discord communities with sub-20ms decisioning and defence-in-depth security.",
          member: [
            { "@type": "Person", name: "Aanya Verma", jobTitle: "Founder · Security" },
            { "@type": "Person", name: "Kiran Mehra", jobTitle: "Engineering" },
            { "@type": "Person", name: "Rohan Iyer", jobTitle: "Platform" },
            { "@type": "Person", name: "Naomi Park", jobTitle: "Design" },
          ],
          knowsAbout: [
            "Sovereignty first — your community, your data, your rules.",
            "Predictable trust — every action logged, signed, reversible.",
            "Performance is a feature — sub-20ms decisioning across regions.",
            "Defence in depth — layered controls against single points of failure.",
          ],
        },
      }),
    }],
  }),
  });

const principles = [
  { k: "Sovereignty first", d: "Your community, your data, your rules. We never train models on guild content." },
  { k: "Predictable trust", d: "Every action is logged, signed, and reversible. No magic, no surprises." },
  { k: "Performance is a feature", d: "Sub-20ms decisioning across regions. Latency isn't a luxury — it's protection." },
  { k: "Defence in depth", d: "Layered controls so a single failure can never compromise an entire server." },
];

const team = [
  { n: "Aanya Verma", r: "Founder · Security" },
  { n: "Kiran Mehra", r: "Engineering" },
  { n: "Rohan Iyer", r: "Platform" },
  { n: "Naomi Park", r: "Design" },
];

