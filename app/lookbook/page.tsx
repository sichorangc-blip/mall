import Image from 'next/image';
import { getLookbook } from '@/lib/sanity/fetch';

export default async function LookbookPage() {
  const lookbook = await getLookbook();

  return (
    <section className="space-y-4">
      <div className="section-card">
        <h1 className="section-title">LOOKBOOK</h1>
        <p className="section-subtitle">브랜드 무드와 사용 장면을 중심으로 구성합니다.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {lookbook.map((item) => (
          <article key={item._id} className="section-card p-4">
            <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
              {item.image ? (
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-gray-500">이미지 준비중</div>
              )}
            </div>
            <h2 className="font-medium">{item.title}</h2>
            <p className="mt-1 text-sm text-gray-600">{item.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
