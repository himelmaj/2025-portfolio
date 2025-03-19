"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Dot from "./ui/dot";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = ["light", "dark", "system"];

  return (
    <div className="flex flex-col gap-2 **:cursor-pointer">
      {themes.map((t) => (
        <button key={t} onClick={() => setTheme(t)} className="flex items-center">
          <span className="mr-2 capitalize">{t}</span>
          <Dot className={`h-2 w-2 ${theme === t ? "rounded-none" : "opacity-0"}`} />
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
