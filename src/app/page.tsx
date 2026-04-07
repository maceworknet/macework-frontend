import { Hero } from "@/components/hero";
import { ProductsSection } from "@/components/products-section";
import { SolutionsSection } from "@/components/solutions-section";
import { WorkSection } from "@/components/work-section";
import { WhyMaceworkSection } from "@/components/why-macework-section";
import { ProcessSection } from "@/components/process-section";
import { LeadForm } from "@/components/lead-form";
import { fetchStrapi } from "@/lib/strapi";

export default async function Home() {
  const [homePage, solutions, products, projects] = await Promise.all([
    fetchStrapi("home-page", { populate: '*' }),
    fetchStrapi("solutions", { populate: '*' }),
    fetchStrapi("products", { populate: '*' }),
    fetchStrapi("projects", { populate: 'cover_image', filters: { featured: 'true' } }),
  ]);

  return (
    <>
      <Hero data={homePage} />
      <ProductsSection products={products} heading={homePage?.products_section_heading} />
      <SolutionsSection solutions={solutions} heading={homePage?.solutions_section_heading} />
      <WorkSection works={projects} heading={homePage?.work_section_heading} />
      <WhyMaceworkSection />
      <ProcessSection steps={homePage?.process_steps || []} heading={homePage?.process_section_heading} />
      <LeadForm />
    </>
  );
}
