"use client";


import React from 'react';
import { Link } from '@/i18n/navigation';
import RandomLetterSwapPingPong from '@/components/ui/random-letter-swap-pingpong-anim';
import Dot from './dot';
import { cn } from '@/lib/utils';

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  className?: string;
}

const NavItem = ({ href, label, isActive = false, className }: NavItemProps) => {
  return (
    <Link href={href} className={cn("flex items-center group relative gap-1 hover:text-amber-500", className)}>
      <RandomLetterSwapPingPong label={label} />
      {isActive && (<Dot className='w-2 h-2' />)}
    </Link>
  );
};

export default NavItem;