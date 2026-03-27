"use client"

import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowLeft, Calendar, User, Clock, Share2, Globe, Link2, Share } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = siteContent.blog.items.find((item) => item.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <InfiniteGrid className="h-full opacity-30" />
        </div>
        
        <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-muted/60 border border-border text-xs font-bold hover:bg-muted transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Blog'a Dön
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-macework bg-macework/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-xs text-muted-foreground font-semibold flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[1.1] text-gradient"
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 pt-4 border-t border-border/40 w-full justify-center"
          >
             <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold">M</div>
                <div className="text-left">
                   <div className="text-xs font-bold">{post.author}</div>
                   <div className="text-[10px] text-muted-foreground">{post.date}</div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <article className="prose prose-zinc dark:prose-invert max-w-none">
             <div 
               className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4"
               dangerouslySetInnerHTML={{ __html: post.content }}
             />
          </article>

          {/* Share Section */}
          <div className="mt-20 pt-10 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="text-sm font-bold text-muted-foreground flex items-center gap-2 uppercase tracking-widest">
                <Share2 className="w-4 h-4" /> Yazıyı Paylaş
             </div>
             <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all"><Globe className="w-5 h-5" /></button>
                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all"><Link2 className="w-5 h-5" /></button>
                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all"><Share className="w-5 h-5" /></button>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
