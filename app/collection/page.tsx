import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { getProducts } from "@/lib/cms";

const BUY_LINK = "https://smartstore.naver.com/iii_setting";

export default async function CollectionPage() {
  const products = await getProducts();

  return (
    <div className="pb-8">
      <PageHero
        label="COLLECTION"
        title="아이셋 제품 라인"
        description="제품명, 설명, 대표 이미지는 Sanity CMS에서 수정 가능합니다."
      />
      <div className="grid gap-4">
        {products.map((product) => (
          <article key={product._id} className="card space-y-3">
            <div className="relative h-44 overflow-hidden rounded-xl bg-stone">
              <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
            </div>
            <p className="text-xs uppercase tracking-wider text-point">{product.subtitle}</p>
            <h2 className="text-lg font-semibold leading-snug">{product.name}</h2>
            <p className="text-sm text-point">{product.description}</p>
            <a href={BUY_LINK} target="_blank" rel="noreferrer" className="inline-block text-sm underline">
              구매하러 가기
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
