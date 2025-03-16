"use client";

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface DotProps  {
    className?: string;
};

const Dot = ({ className }: DotProps) => {
    return (
        <motion.span
            className={cn("inline-block h-3 w-3 bg-current rounded-full", className)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        />
    );
};

export default Dot;