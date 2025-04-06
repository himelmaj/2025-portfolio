import { Inter } from "next/font/google";
import { cn } from "./utils";

export const inter = Inter({
    variable: "--font-inter",
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    style: "normal",
});

export const fontsVaribles = cn(inter.variable)