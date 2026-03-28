"use client";

import Link from "next/link";
import { siteContent } from "../content/site-content";
import { Share2, Globe, Users } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  linkedin: Share2,
  twitter: Globe,
  instagram: Users,
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-20 pb-12 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-xl font-bold tracking-tighter">Macework<span className="text-macework">.</span></span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed font-normal">
              {siteContent.footer.description}
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {siteContent.header.navigation.map((nav, i) => (
                <li key={i}>
                  <Link href={nav.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest">İletişim</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="font-medium text-foreground">{siteContent.contact.email}</li>
              <li>{siteContent.contact.phone}</li>
            </ul>
            <div className="flex items-center gap-5 pt-2">
              {siteContent.contact.social.map((social, i) => {
                const Icon = icons[social.icon];
                return (
                  <Link key={i} href={social.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-medium">{siteContent.footer.copyright}</p>
          <div className="flex gap-6">
             <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Gizlilik Politikası</Link>
             <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

