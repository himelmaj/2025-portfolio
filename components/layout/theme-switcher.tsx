"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const THEMES = ["light", "dark", "system"];

const ThemeSwitcher = () => {
  const { theme: currentTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2 **:cursor-pointer">
      {THEMES.map((theme) => (
        <button key={theme} onClick={() => setTheme(theme)} className={cn("flex items-center gap-2", (currentTheme !== theme && "opacity-50"))}>
          <span>{theme}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
