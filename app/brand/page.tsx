import { PageHero } from "@/components/page-hero";
import { getBrandStory } from "@/lib/cms";

export default async function BrandPage() {
  const brand = await getBrandStory();

  return (
    <div className="pb-8">
      <PageHero label="BRAND" title={brand.title} description={brand.summary} />
      <section className="card">
        <p className="text-lg font-medium">{brand.slogan}</p>
        <p className="mt-4 text-sm leading-7 text-point">{brand.longDescription}</p>
      </section>
    </div>
  );
}
