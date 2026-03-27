"use client"

import { useParams, useRouter } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowLeft, CheckCircle2, Globe, Calendar, Tag, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function WorkDetailPage() {
  const { slug } = useParams();
  const work = siteContent.works.items.find((item) => item.slug === slug);

  if (!work) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <InfiniteGrid className="h-full opacity-30" />
        </div>
        
        <div className="container relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Link 
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-muted/50 border border-border text-xs font-bold hover:bg-muted transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Tüm İşlerimiz
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tighter mb-6 text-gradient"
          >
            {work.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground font-semibold"
          >
             <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-macework" /> {work.year}</div>
             <div className="flex items-center gap-2"><Tag className="w-4 h-4 text-macework" /> {work.category}</div>
             <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-macework" /> Yayında</div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
               <div className="space-y-6">
                 <h2 className="text-3xl font-bold flex items-center gap-3">
                   <div className="w-2 h-8 rounded-full bg-macework" />
                   Proje Hikayesi
                 </h2>
                 <p className="text-xl text-muted-foreground leading-relaxed">
                   {work.longDescription}
                 </p>
               </div>

               <div className="space-y-6">
                 <h2 className="text-3xl font-bold flex items-center gap-3">
                   <div className="w-2 h-8 rounded-full bg-primary" />
                   Teknoloji Yığını
                 </h2>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {work.technologies.map((tech) => (
                      <div key={tech} className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 border border-border/50">
                        <div className="w-8 h-8 rounded-lg bg-card flex items-center justify-center">
                           <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="font-bold">{tech}</span>
                      </div>
                    ))}
                 </div>
               </div>

               <div className="p-10 rounded-3xl bg-macework/5 border border-macework/10 space-y-6">
                  <h3 className="text-2xl font-bold">Sonuç</h3>
                  <p className="text-lg italic text-muted-foreground opacity-90 leading-relaxed">
                    "Macework ile çalışmak, vizyonumuzu bir sonraki seviyeye taşıdı. Teknik derinlikleri ve kreatif yaklaşımları projenin başarısında kilit rol oynadı."
                  </p>
               </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
               <div className="p-8 rounded-3xl bg-card border border-border shadow-2xl shadow-black/5 sticky top-32 space-y-6">
                  <h3 className="text-xl font-bold">Proje Kartı</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground font-medium">Müşteri</span>
                        <span className="font-bold">Gizlilik Sözleşmesi</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground font-medium">Teslim Süresi</span>
                        <span className="font-bold">4 Ay</span>
                     </div>
                     <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground font-medium">Alan</span>
                        <span className="font-bold">{work.category}</span>
                     </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-foreground text-background font-bold hover:scale-[1.02] active:scale-95 transition-all text-sm"
                  >
                    Benzer Proje Başlat
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
