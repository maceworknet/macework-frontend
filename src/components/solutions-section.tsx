import { siteContent } from "@/content/site-content";
import { Layout, Brush, LineChart, Share2, Code, ShoppingBag, Network, Box, Smartphone, Calculator, Brain } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  "layout": Layout,
  "brush": Brush,
  "line-chart": LineChart,
  "share-2": Share2,
  "code": Code,
  "shopping-bag": ShoppingBag,
  "network": Network,
  "box": Box,
  "smartphone": Smartphone,
  "calculator": Calculator,
  "brain": Brain
};

export function SolutionsSection() {
  // Combine all items from mega menu for the landing page section
  const allSolutions = siteContent.solutionsMegaMenu.columns.flatMap(col => col.items);

  return (
    <section id="solutions" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Kapsamlı Dijital Çözümler</h2>
          <p className="text-lg text-muted-foreground">
            İşletmenizin dijital dönüşüm yolculuğunda her adımda yanınızdayız. Stratejiden tasarıma, yazımdan büyümeye kadar tam hizmet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allSolutions.map((solution, idx) => {
            const Icon = icons[solution.iconName] || Code;
            return (
              <div 
                key={idx} 
                className="group p-6 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-macework/10 flex items-center justify-center text-macework mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
