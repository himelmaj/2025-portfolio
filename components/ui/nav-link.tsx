"use client";


import React from 'react';
import { Link } from '@/i18n/navigation';
import RandomLetterSwapPingPong from '@/components/ui/random-letter-swap-pingpong-anim';
import Dot from './dot';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  className?: string;
}

const NavLink = ({ href, label, isActive, className }: NavLinkProps) => {
  return (
    <Link  href={href}  className={cn("flex items-center group relative ", className)}>
      <RandomLetterSwapPingPong label={label} />
      <div className="ml-2 w-3">
        {isActive ? (
          <Dot />
        ) : (
          <span className="inline-block h-3 w-3 rounded-full opacity-0 bg-current transition-opacity group-hover:opacity-25" />
        )}
      </div>
    </Link>
  );
};

export default NavLink;