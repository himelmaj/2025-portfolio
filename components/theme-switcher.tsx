"use client";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {

    const { theme, setTheme, themes } = useTheme();
  return (
    <div>
        {JSON.stringify(themes)}

    </div>
  )
}

export default ThemeSwitcher