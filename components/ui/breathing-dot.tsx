"use client";

import { motion } from "motion/react"

import { cn } from '@/lib/utils';

interface BreathingDotProps {
    className?: string;
};


export default function BreathingDot({ className }: BreathingDotProps) {
    return (
        <motion.div
            className={cn("inline-block h-3 w-3 bg-current rounded-full", className)}
            animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}
