import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getBrandStory, getProducts } from "@/lib/cms";

const BUY_LINK = "https://smartstore.naver.com/iii_setting";

export default async function HomePage() {
  const [brand, products] = await Promise.all([getBrandStory(), getProducts()]);

  return (
    <div className="pb-8">
      <PageHero label="HOME" title={brand.slogan} description={brand.summary} />

      <section className="card space-y-4">
        <p className="section-title">Brand</p>
        <h2 className="text-xl font-semibold">{brand.title}</h2>
        <p className="text-sm leading-7 text-point">{brand.longDescription}</p>
        <Link href="/brand" className="text-sm font-medium underline underline-offset-4">
          브랜드 스토리 보기
        </Link>
      </section>

      <section className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="section-title">Collection Preview</p>
          <Link href="/collection" className="text-xs underline underline-offset-4">
            전체 보기
          </Link>
        </div>
        <div className="grid gap-3">
          {products.slice(0, 2).map((product) => (
            <article key={product._id} className="card">
              <p className="text-xs uppercase tracking-wide text-point">{product.subtitle}</p>
              <h3 className="mt-1 text-base font-medium">{product.name}</h3>
              <p className="mt-2 text-sm text-point">{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 card">
        <p className="section-title">Buy</p>
        <p className="mt-2 text-sm text-point">구매는 외부 링크(네이버 스마트스토어)로 이동합니다.</p>
        <a
          href={BUY_LINK}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex rounded-full bg-ink px-4 py-2 text-sm text-white"
        >
          스마트스토어 바로가기
        </a>
      </section>
    </div>
  );
}
