import { SIDEBAR_WIDTH } from "@/lib/constants";
import Link from "next/link";
import { Heart } from "lucide-react";

export function Navigation() {
  return (
    <nav
      className="fixed left-0 top-0 h-screen bg-zinc-900 p-4"
      style={{ width: SIDEBAR_WIDTH }}
    >
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Heart className="h-6 w-6" />
          <span className="font-semibold">Cards For Mental Health</span>
        </Link>
      </div>
      <div className="space-y-1">
        {[
          "Home",
          "About Us",
          "Ways to Get Involved",
          "Tips for Helping People",
          "Hotlines to Call",
          "Get in Touch",
          "Citations",
        ].map(item => (
          <Link
            key={item}
            href={
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`
            }
            className="block rounded-lg px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-800"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
