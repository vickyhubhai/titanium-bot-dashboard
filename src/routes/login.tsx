import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export const Route = createFileRoute('/login')({
  head: () => ({
    meta: [
      { title: "Login — Titanium Security" },
      { name: "description", content: "Authenticate with Discord to access your Titanium Security dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

