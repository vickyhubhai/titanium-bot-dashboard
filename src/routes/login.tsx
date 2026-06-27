import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export const Route = createFileRoute('/login')({
  head: () => ({
    meta: [
      { title: "Login — Sentinel" },
      { name: "description", content: "Authenticate with Discord to access your Sentinel dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
  });

