"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// import Dot from "./ui/dot";
import { cn } from "@/lib/utils";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = ["light", "dark", "system"];

  return (
    <div className="flex gap-2 **:cursor-pointer">
      {themes.map((t) => (
        <button key={t} onClick={() => setTheme(t)} className={cn("flex items-center gap-2", (theme !== t && "opacity-50"))}>
          <span>{t}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
