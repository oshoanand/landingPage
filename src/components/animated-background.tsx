"use client";

import React from 'react';
import { cn } from '@/lib/utils';

const AnimatedBackground: React.FC = () => {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 h-full w-full",
        "bg-gradient-to-br from-background via-indigo-100 to-purple-100 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900",
        "animate-[gradientAnimation_15s_ease_infinite]"
      )}
      style={{
        backgroundSize: '200% 200%',
      }}
    />
  );
};

export default AnimatedBackground;
