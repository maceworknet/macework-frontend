import { siteContent } from "@/content/site-content";
import { Layers, Server, Zap, Palette } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  "layers": Layers,
  "server": Server,
  "zap": Zap,
  "palette": Palette
};

export function WhyMaceworkSection() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {siteContent.reasons.sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              {siteContent.reasons.sectionDescription}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {siteContent.reasons.items.map((reason, idx) => {
                const Icon = icons[reason.iconName] || Zap;
                return (
                  <div key={idx} className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-macework flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-macework/10 blur-[100px] rounded-full"></div>
            <div className="relative border border-border bg-card p-8 rounded-3xl overflow-hidden shadow-sm">
              <div className="space-y-6">
                 <div className="flex items-center gap-4 border-b border-border pb-6">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-macework">M</div>
                    <div>
                       <div className="font-bold">Next-Gen Delivery</div>
                       <div className="text-xs text-muted-foreground">Standardized Quality</div>
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between p-3 bg-muted/40 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <div className="h-3 w-24 bg-border/50 rounded"></div>
                        </div>
                        <div className="h-3 w-12 bg-macework/20 rounded"></div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="pt-4">
                   <div className="h-40 w-full rounded-xl bg-gradient-to-t from-macework/20 to-transparent border border-white/5 flex items-end p-4">
                      <div className="flex gap-2 w-full items-end h-full">
                         {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                           <div key={i} className="flex-1 bg-macework/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                         ))}
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
