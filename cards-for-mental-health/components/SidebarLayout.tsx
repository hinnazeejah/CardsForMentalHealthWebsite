import { Navigation } from "./Navigation"
import { SIDEBAR_WIDTH } from "@/lib/constants"

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F4DD] to-[#F4F4DD]">
      <Navigation />
      <main className="lg:ml-[256px] transition-all duration-200">
        {children}
      </main>
    </div>
  )
}