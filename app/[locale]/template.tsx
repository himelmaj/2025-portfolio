// app/template.tsx
'use client';
import { motion } from 'motion/react';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 }
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className='flex flex-1'
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.main>
  );
}