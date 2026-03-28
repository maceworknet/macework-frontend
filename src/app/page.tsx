import { Hero } from "@/components/hero";
import { ProductsSection } from "@/components/products-section";
import { SolutionsSection } from "@/components/solutions-section";
import { WorkSection } from "@/components/work-section";
import { WhyMaceworkSection } from "@/components/why-macework-section";
import { ProcessSection } from "@/components/process-section";
import { LeadForm } from "@/components/lead-form";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <SolutionsSection />
      <WorkSection />
      <WhyMaceworkSection />
      <ProcessSection />
      <LeadForm />
    </>
  );
}
