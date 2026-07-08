"use client";

import { useEffect, useState } from "react";
import { Bell, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

  return (
    <header className="h-20 border-b bg-background px-8 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-sm text-muted-foreground">
          Blackcoffer Data Visualization
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search..."
            className="w-72 pl-10"
          />
        </div>

        <Button
          variant="outline"
          size="icon"
        >
          <Bell className="h-5 w-5" />
        </Button>

        {mounted && (
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        )}

        <div className="flex items-center gap-3 rounded-xl border px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            A
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold">
              Ayan
            </p>

            <p className="text-xs text-muted-foreground">
              Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}