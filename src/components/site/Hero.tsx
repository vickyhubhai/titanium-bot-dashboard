import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";
import { ParticleField } from "./ParticleField";

export function Hero() {
  const heroTitle = "Fortress-Grade Discord Security & Moderation";
  const heroSubtitle = "The ultimate security bot for professional Discord communities. Real-time antinuke protection, zero-latency automod, verified gates, and customizable incident logging to secure your guild.";

  return (
    <section className="relative px-6 pb-20 pt-16">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
        <ParticleField />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand"
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          System status · fortified
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-7xl"
        >
          {heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground text-pretty"
        >
          {heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Invite Bot
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://discord.gg/UXKWfgWgth"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            Support Server
          </a>
          <Link
            to="/docs"
            className="glass rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            Read Docs
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 mt-20">
        <DashboardMockup />
      </div>
    </section>
  );
}