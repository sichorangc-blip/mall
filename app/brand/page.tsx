import { getBrandStory } from '@/lib/sanity/fetch';

export default async function BrandPage() {
  const brand = await getBrandStory();

  return (
    <section className="section-card space-y-4">
      <h1 className="section-title">BRAND</h1>
      <p className="text-sm text-gray-500">{brand.title}</p>
      <p className="text-lg font-medium">{brand.slogan}</p>
      <p className="max-w-2xl text-sm leading-relaxed text-gray-700">{brand.description}</p>
      <div className="rounded-xl bg-iset-bg p-4 text-sm text-gray-600">
        15년간 생활위생용품 기획 경험을 바탕으로, 가족에게 맞는 최적의 세팅값을 구현한 안전한 생활 제품을 지향합니다.
      </div>
    </section>
  );
}
