"use client";

import { motion } from "framer-motion";
import { InfiniteGrid } from "./ui/the-infinite-grid";
import { cn } from "@/lib/utils";

interface SubPageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function SubPageHeader({ badge, title, description, children, className }: SubPageHeaderProps) {
  return (
    <section className={cn("relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-border/40", className)}>
      <div className="absolute inset-0 z-0">
        <InfiniteGrid className="h-full opacity-40" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {badge && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-macework/10 border border-macework/20 text-[11px] font-medium text-macework uppercase tracking-widest mb-6">
                {badge}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gradient leading-[1.1]">
              {title}
            </h1>
            
            {description && (
              <p className="text-base md:text-lg text-muted-foreground font-normal max-w-2xl leading-relaxed">
                {description}
              </p>
            )}

            {children && (
              <div className="mt-8">
                {children}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

