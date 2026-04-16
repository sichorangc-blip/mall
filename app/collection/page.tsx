import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/lib/sanity/fetch';

export default async function CollectionPage() {
  const products = await getProducts();

  return (
    <section className="space-y-4">
      <div className="section-card">
        <h1 className="section-title">COLLECTION</h1>
        <p className="section-subtitle">제품 정보는 CMS에서 수정하고, 구매는 스마트스토어로 연결합니다.</p>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <article key={product._id} className="section-card p-4">
            <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
              {product.image ? (
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-gray-500">이미지 준비중</div>
              )}
            </div>
            <p className="text-xs text-gray-500">{product.subtitle}</p>
            <h2 className="mt-1 text-lg font-semibold">{product.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{product.description}</p>
            <Link
              href={product.externalUrl}
              target="_blank"
              className="mt-4 inline-flex rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              스마트스토어 구매 링크
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
