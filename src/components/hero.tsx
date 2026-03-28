"use client";

import { siteContent } from "../content/site-content";
import Link from "next/link";
import { ArrowRight, MoveRight, ChevronRight } from "lucide-react";
import { InfiniteGrid } from "./ui/the-infinite-grid";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
} as const;

export function Hero() {
  return (
    <InfiniteGrid className="pt-52 pb-24 lg:pt-64 lg:pb-40 w-full min-h-screen flex flex-col justify-center">
      <div className="container relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-10">
            <Link 
              href="#products" 
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-[13px] font-medium text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all backdrop-blur-sm group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-macework animate-pulse" />
              {siteContent.hero.badge}
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 whitespace-pre-line leading-[1.1] text-gradient"
          >
            {siteContent.hero.title.replace(/\n/g, ' ')}
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-normal"
          >
            {siteContent.hero.description}
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-macework hover:bg-macework-hover text-white shadow-lg shadow-macework/20">
              <Link href={siteContent.hero.primaryCta.href}>
                {siteContent.hero.primaryCta.label}
                <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full border-border/50 backdrop-blur-sm bg-background/50">
              <Link href={siteContent.hero.secondaryCta.href}>
                {siteContent.hero.secondaryCta.label}
                <ArrowRight className="ml-2 w-4 h-4 text-muted-foreground" />
              </Link>
            </Button>
          </motion.div>

          {/* Brands */}
          <motion.div 
             variants={item}
             className="mt-24 pt-12 border-t border-border/10 w-full"
          >
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/50 mb-8">
               REFERANSLARIMIZ & ÜRÜNLERİMİZ
             </p>
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity">
                {["Qrgetir", "Carigetir", "SociaMind", "byoo.pro"].map((p, i) => (
                  <span key={i} className="text-xl font-bold tracking-tight">{p}</span>
                ))}
             </div>
          </motion.div>
        </motion.div>
      </div>
    </InfiniteGrid>
  );
}

