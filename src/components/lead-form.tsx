"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Mock submit
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-card border border-border p-12 rounded-3xl text-center space-y-6 max-w-2xl mx-auto shadow-sm">
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold">Mesajınız Alındı!</h3>
        <p className="text-muted-foreground">
          Ekibimiz en kısa sürede sizinle iletişime geçecektir. Macework Creativ'e gösterdiğiniz ilgi için teşekkürler.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-macework font-semibold hover:underline"
        >
          Yeni bir mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <section id="lead" className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Yeni Bir Projeye Başlayalım</h2>
            <p className="text-lg text-muted-foreground">
              Fikrinizi ürüne dönüştürmek veya markanızı dijitalde büyütmek için ilk adımı atın.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-macework/5 blur-[80px] -mr-32 -mt-32"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground px-1">Ad Soyad</label>
                <input 
                  required
                  type="text" 
                  placeholder="Yaser Köse"
                  className="w-full bg-background border border-border focus:border-macework/50 focus:ring-1 focus:ring-macework/50 rounded-xl px-4 py-3 outline-none transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground px-1">Firma Adı</label>
                <input 
                  type="text" 
                  placeholder="Macework"
                  className="w-full bg-background border border-border focus:border-macework/50 focus:ring-1 focus:ring-macework/50 rounded-xl px-4 py-3 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground px-1">E-posta</label>
                <input 
                  required
                  type="email" 
                  placeholder="iletisim@macework.com"
                  className="w-full bg-background border border-border focus:border-macework/50 focus:ring-1 focus:ring-macework/50 rounded-xl px-4 py-3 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground px-1">İlgilendiğiniz Alan</label>
                <select className="w-full bg-background border border-border focus:border-macework/50 rounded-xl px-4 py-3 outline-none transition-all appearance-none cursor-pointer">
                  <option>SaaS Ürünleri</option>
                  <option>Web Tasarım & Yazılım</option>
                  <option>E-Ticaret</option>
                  <option>Dijital Pazarlama</option>
                  <option>Diger</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-muted-foreground px-1">Mesajınız</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Projenizden kısaca bahsedin..."
                  className="w-full bg-background border border-border focus:border-macework/50 focus:ring-1 focus:ring-macework/50 rounded-xl px-4 py-3 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  disabled={status === "submitting"}
                  className={cn(
                    "w-full bg-macework text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-macework-hover transition-all shadow-lg shadow-macework/20 relative overflow-hidden",
                    status === "submitting" && "opacity-80 cursor-not-allowed"
                  )}
                >
                  {status === "submitting" ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Teklif Al
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-muted-foreground mt-4 italic">
                  * Bilgileriniz gizli tutulacak ve sadece görüşme amaçlı kullanılacaktır.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
