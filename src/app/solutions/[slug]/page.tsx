"use client"

import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowRight, CheckCircle2, Layout, Zap, Smartphone, ShieldCheck, PieChart, Sparkles, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const solution = siteContent.solutionsDetail.find((item) => item.slug === slug);

  if (!solution) {
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
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
              Macework Çözümleri
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tighter mb-6 text-gradient"
          >
            {solution.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-medium"
          >
            {solution.description}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
             <div className="space-y-12">
                <div className="space-y-6">
                   <h2 className="text-4xl font-extrabold tracking-tight">Neler Sunuyoruz?</h2>
                   <div className="h-1 w-20 bg-macework rounded-full" />
                   <p className="text-xl text-muted-foreground leading-relaxed">
                      Sektörel standartların üzerinde, markanıza değer katan ve dönüşümü odağa alan profesyonel {solution.title} süreçleri.
                   </p>
                </div>

                <div className="grid gap-6">
                   {solution.features.map((feature, idx) => (
                      <motion.div 
                        key={feature} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-6 rounded-3xl bg-card border border-border/50 group hover:border-macework/30 transition-all"
                      >
                         <div className="w-12 h-12 rounded-2xl bg-macework/10 flex items-center justify-center text-macework group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-6 h-6" />
                         </div>
                         <span className="font-bold text-xl">{feature}</span>
                      </motion.div>
                   ))}
                </div>
             </div>

             <div className="p-12 rounded-[3.5rem] bg-card border border-border shadow-2xl relative overflow-hidden group space-y-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-macework/5 blur-[80px] -mr-32 -mt-32"></div>
                <h3 className="text-3xl font-bold tracking-tight">Sürecimiz Nasıl İşler?</h3>
                <div className="space-y-8">
                   {[
                      { step: 1, label: "Keşif & Analiz", color: "bg-macework" },
                      { step: 2, label: "Strateji & Planlama", color: "bg-primary" },
                      { step: 3, label: "Tasarım & Geliştirme", color: "bg-blue-500" },
                      { step: 4, label: "Test & Teslimat", color: "bg-green-500" },
                   ].map(s => (
                      <div key={s.step} className="flex items-center gap-6 group/step">
                         <div className={`w-12 h-12 rounded-full ${s.color} text-white flex items-center justify-center font-bold text-lg group-hover/step:scale-110 transition-transform`}>
                            {s.step}
                         </div>
                         <span className="text-xl font-bold text-muted-foreground group-hover/step:text-foreground transition-colors">{s.label}</span>
                      </div>
                   ))}
                </div>

                <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-5 rounded-full bg-foreground text-background font-black hover:scale-[1.02] active:scale-95 transition-all text-lg shadow-2xl shadow-black/10"
                 >
                    Proje Başlatın
                    <MoveRight className="w-5 h-5" />
                 </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
