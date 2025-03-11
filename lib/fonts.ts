import { Geist, Geist_Mono, Roboto, Roboto_Mono } from "next/font/google";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const robotoSans = Roboto({
    variable: "--font-roboto-sans",
    subsets: ["latin"],
});

export const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});
