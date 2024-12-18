"use client";

import { Navigation } from "./Navigation";
import { SIDEBAR_WIDTH } from "@/lib/constants";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      <main style={{ marginLeft: SIDEBAR_WIDTH }}>{children}</main>
    </div>
  );
}
