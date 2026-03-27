"use client";

import { siteContent } from "@/content/site-content";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import { LeadForm } from "@/components/lead-form";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <InfiniteGrid className="h-full opacity-30" />
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.h1 
              variants={item}
              className="text-5xl font-black tracking-tighter mb-6 text-gradient"
            >
              Bize Ulaşın
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-xl text-muted-foreground max-w-2xl mb-12"
            >
              Yeni bir fikriniz mi var? Ya da mevcut projenizi büyütmek mi istiyorsunuz? 
              Kahve eşliğinde dijital stratejinizi konuşalım.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b border-border pb-4">İletişim Bilgileri</h3>
                
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-macework/10 flex items-center justify-center text-macework group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">E-posta</p>
                    <a href={`mailto:${siteContent.contact.email}`} className="text-lg font-bold hover:text-macework transition-colors">
                      {siteContent.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Telefon</p>
                    <a href={`tel:${siteContent.contact.phone}`} className="text-lg font-bold hover:text-primary transition-colors">
                      {siteContent.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Adres</p>
                    <p className="text-base font-bold whitespace-pre-line leading-relaxed">
                      {siteContent.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-muted/50 border border-border space-y-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                   <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg leading-tight">Hızlı Cevap Garantisi</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tüm başvurularınıza en geç 24 saat içerisinde uzman ekibimiz tarafından geri dönüş sağlanır.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
               <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
