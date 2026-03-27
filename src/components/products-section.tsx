import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  badge: string;
  href: string;
  category: string;
}

export function ProductCard({ title, description, badge, href, category }: ProductCardProps) {
  return (
    <Link 
      href={href} 
      target="_blank"
      className="group relative flex flex-col h-full p-8 rounded-3xl bg-card border border-border hover:border-macework/50 transition-all duration-300 hover:shadow-2xl hover:shadow-macework/5 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="w-5 h-5 text-macework" />
      </div>

      <div className="mb-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-macework bg-macework/10 px-3 py-1 rounded-full">
            {badge}
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            {category}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-macework transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground">
        Platformu İncele
        <div className="h-px flex-1 bg-border group-hover:bg-macework/20 transition-colors" />
      </div>
    </Link>
  );
}

import { siteContent } from "@/content/site-content";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {siteContent.products.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteContent.products.sectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.products.items.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
