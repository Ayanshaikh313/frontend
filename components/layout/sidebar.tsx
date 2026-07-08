"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BarChart3,
  Database,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Dataset",
    href: "/dataset",
    icon: Database,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-background">
      {/* Logo */}

      <div className="flex h-20 items-center border-b px-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight">
            BlkCofferViz
          </h1>

          <span className="text-xs text-muted-foreground">
            Analytics Dashboard
          </span>
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />

              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="border-t p-5">
        <div className="rounded-xl bg-muted p-4">
          <p className="font-semibold">
            Blackcoffer
          </p>

          <p className="text-xs text-muted-foreground mt-1">
            Data Visualization Dashboard
          </p>
        </div>
      </div>
    </aside>
  );
}