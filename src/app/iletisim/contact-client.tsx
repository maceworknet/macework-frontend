"use client";

import { useState } from "react";
import { siteContent } from "@/content/site-content";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { SubPageHeader } from "@/components/subpage-header";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactClient({ strapiSettings }: { strapiSettings?: any }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <SubPageHeader 
        badge="İletişim"
        title="Bize Ulaşın"
        description="Fikrinizi ürüne dönüştürmek veya markanızı dijitalde büyütmek için ilk adımı atın. Kahve eşliğinde stratejinizi konuşalım."
      />

      <section className="py-20 bg-background overflow-hidden">
        <div className="container overflow-visible">
          {/* Main Contact Card */}
          <div className="max-w-6xl mx-auto bg-card border border-border/60 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Contact Information (Dark) */}
            <div className="lg:w-[400px] bg-zinc-900 dark:bg-zinc-950 p-10 lg:p-12 text-zinc-50 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-macework/20 blur-[100px] -mr-32 -mt-32"></div>
                
                <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold tracking-tight">İletişim Bilgileri</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Markanızı dijitalde parlatmak ve yenilikçi teknoloji çözümlerimizle tanışmak için ekibimizle doğrudan iletişime geçin.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-macework group-hover:scale-110 transition-transform">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Telefon</span>
                                <a href={`tel:${(strapiSettings?.phone || "0 (850) 123 45 67")}`} className="text-base font-bold hover:text-macework transition-colors">{(strapiSettings?.phone || "0 (850) 123 45 67")}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-macework group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">E-posta</span>
                                <a href={`mailto:${(strapiSettings?.email || "iletisim@macework.com")}`} className="text-base font-bold hover:text-macework transition-colors">{(strapiSettings?.email || "iletisim@macework.com")}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-macework group-hover:scale-110 transition-transform">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Adres</span>
                                <span className="text-sm font-medium text-zinc-300 leading-relaxed whitespace-pre-line">{(strapiSettings?.address || "Macework Technology\nTeknopark Istanbul, Pendik")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 pt-12 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-macework transition-colors cursor-pointer text-zinc-400 hover:text-white">
                        <MessageSquare className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] text-zinc-500 font-medium">Hızlı cevap için <br/> WhatsApp'tan ulaşın.</p>
                </div>
            </div>

            {/* Right Side: Form (Homepage Build Style) */}
            <div className="flex-1 p-10 lg:p-14 bg-card relative">
                {status === "success" ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                    >
                        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                             <h3 className="text-2xl font-bold">Mesajınız Alındı!</h3>
                             <p className="text-muted-foreground text-sm max-w-xs mx-auto">Uzman ekibimiz talebinizi inceleyip en kısa sürede sizinle iletişime geçecektir.</p>
                        </div>
                        <Button variant="outline" onClick={() => setStatus("idle")} className="rounded-full">Yeni Form Gönder</Button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ad Soyad</Label>
                          <Input 
                            id="name"
                            required
                            placeholder="Yaser Köse"
                            className="h-11 rounded-md"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Firma Adı</Label>
                          <Input 
                            id="company"
                            placeholder="Macework"
                            className="h-11 rounded-md"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">E-posta</Label>
                          <Input 
                            id="email"
                            required
                            type="email" 
                            placeholder="iletisim@macework.com"
                            className="h-11 rounded-md"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="interest">İlgilendiğiniz Alan</Label>
                          <Select name="interest" defaultValue="SaaS Ürünleri">
                            <SelectTrigger id="interest" className="h-11 rounded-md">
                              <SelectValue placeholder="Bir alan seçin" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="SaaS Ürünleri">SaaS Ürünleri</SelectItem>
                              <SelectItem value="Web Tasarım & Yazılım">Web Tasarım & Yazılım</SelectItem>
                              <SelectItem value="E-Ticaret">E-Ticaret</SelectItem>
                              <SelectItem value="Dijital Pazarlama">Dijital Pazarlama</SelectItem>
                              <SelectItem value="Diger">Diğer</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="md:col-span-2 space-y-2">
                          <Label htmlFor="message">Mesajınız</Label>
                          <Textarea 
                            id="message"
                            required
                            rows={4}
                            placeholder="Projenizden veya talebinizden bahsedin..."
                            className="rounded-md resize-none"
                          />
                        </div>

                        <div className="md:col-span-2 pt-4">
                          <Button 
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full h-12 font-bold bg-macework hover:bg-macework-hover text-white transition-all shadow-none"
                          >
                            {status === "submitting" ? (
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                              <>
                                Teklif Al
                                <Send className="ml-2 w-4 h-4" />
                              </>
                            )}
                          </Button>
                        </div>
                    </form>
                )}
            </div>

          </div>

          {/* Brands Slider Section - Fixed Overflow */}
          <div className="mt-32 w-full max-w-5xl mx-auto pt-10 border-t border-border/50 overflow-hidden">
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/50 mb-12 text-center">
               GÜVENEN MARKALAR & PROJELERİMİZ
             </p>
             <div className="relative group/slider overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="flex w-fit gap-20 items-center animate-marquee whitespace-nowrap">
                   {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex gap-20 items-center">
                         {["Qrgetir", "Carigetir", "SociaMind", "byoo.pro"].map((p, j) => (
                            <span key={`${i}-${j}`} className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground/20 hover:text-macework transition-colors cursor-default select-none">
                               {p}
                            </span>
                         ))}
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

