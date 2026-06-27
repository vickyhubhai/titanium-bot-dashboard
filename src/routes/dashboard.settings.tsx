import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { Download, Upload, Save, Palette, Globe, RotateCcw } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute('/dashboard/settings')({
  head: () => ({ meta: [{ title: "Settings — Titanium Security" }, { name: "robots", content: "noindex" }] }),
});

const themes = [
  { k: "obsidian", c: ["#0a0a14", "#6b6bff"] },
  { k: "ember", c: ["#1a0d0d", "#ff6b8a"] },
  { k: "forest", c: ["#08120e", "#5cffb5"] },
  { k: "solar", c: ["#1a1308", "#ffc66b"] },
];

const langs = ["English", "Español", "Français", "Deutsch", "Português", "日本語", "हिन्दी"];

