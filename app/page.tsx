import Link from 'next/link';
import { getBrandStory, getProducts } from '@/lib/sanity/fetch';

export default async function HomePage() {
  const brand = await getBrandStory();
  const products = await getProducts();

  return (
    <div className="space-y-6">
      <section className="section-card space-y-4">
        <p className="text-sm text-gray-500">ISET / iii</p>
        <h1 className="text-3xl font-semibold tracking-tight">{brand.slogan}</h1>
        <p className="max-w-xl text-sm leading-relaxed text-gray-600">{brand.description}</p>
        <Link
          href="https://smartstore.naver.com/iii_setting"
          target="_blank"
          className="inline-flex rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          스마트스토어 방문하기
        </Link>
      </section>

      <section className="section-card">
        <h2 className="section-title">Featured Collection</h2>
        <p className="section-subtitle">핵심 제품 4종을 먼저 소개합니다.</p>
        <ul className="mt-4 space-y-3">
          {products.slice(0, 4).map((product) => (
            <li key={product._id} className="rounded-xl border border-iset-soft p-4">
              <p className="text-sm text-gray-500">{product.subtitle}</p>
              <p className="mt-1 font-medium">{product.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
