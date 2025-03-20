import { Inter, JetBrains_Mono, Roboto } from "next/font/google";

export const inter = Inter({
    variable: "--font-inter",
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    style: "normal",
});

export const jetbrains = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    weight: "400",
    subsets: ["latin"],
});

export const roboto = Roboto({
    variable: "--font-roboto",
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});
