"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { siteContent } from "../content/site-content";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] p-2 -mr-2 text-foreground transition-all active:scale-95"
        aria-label="Menüyü Aç/Kapat"
      >
        <div className="relative w-6 h-6">
          <motion.div
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="absolute top-1 inset-x-0 h-0.5 bg-foreground rounded-full"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-0.5 bg-foreground rounded-full"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="absolute bottom-1 inset-x-0 h-0.5 bg-foreground rounded-full"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[50]"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-background border-l border-border z-[55] shadow-2xl flex flex-col pt-24 pb-12 px-8 overflow-y-auto"
            >
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Menü</p>
                  <nav className="flex flex-col gap-4">
                    {siteContent.header.navigation.map((item, idx) => (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        key={item.label}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between text-2xl font-black tracking-tighter text-foreground group"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                          <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-macework" />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.4 }}
                   className="mt-4 pt-8 border-t border-border space-y-6"
                >
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Hızlı İletişim</p>
                    <div className="space-y-2">
                      <p className="text-sm font-bold">{siteContent.contact.email}</p>
                      <p className="text-sm font-bold text-muted-foreground">{siteContent.contact.phone}</p>
                    </div>
                  </div>

                  <Link
                    href={siteContent.header.cta.href}
                    className="flex items-center justify-center gap-2 w-full bg-foreground text-background dark:bg-zinc-100 dark:text-zinc-950 px-6 py-5 rounded-3xl text-sm font-black shadow-xl shadow-black/10 transition-all active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    {siteContent.header.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-auto pt-12">
                 <p className="text-[10px] text-muted-foreground font-medium">© 2026 Macework Creativ.<br/>Geleceği birlikte yazıyoruz.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
