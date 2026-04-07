import { SubPageHeader } from "@/components/subpage-header";
import { fetchStrapi } from "@/lib/strapi";
import { BlogList } from "@/components/blog-list";

export const metadata = {
  title: "Blog & Haberler | Macework",
  description: "Teknoloji, tasarım ve dijital ürün dünyasından güncel içerikler, vaka analizleri ve ajans günlüğümüz."
};

export default async function BlogPage() {
  const posts = await fetchStrapi<any[]>("blog-posts", { populate: '*' });

  return (
    <main className="min-h-screen">
      <SubPageHeader 
        badge="Blog & Haberler"
        title="Dünyadan Haberler"
        description="Teknoloji, tasarım ve dijital ürün dünyasından güncel içerikler, vaka analizleri ve ajans günlüğümüz."
      />

      <section className="py-20 bg-background">
        <div className="container">
          <BlogList posts={posts} />

        </div>
      </section>
    </main>
  );
}
