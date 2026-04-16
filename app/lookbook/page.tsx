import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { getLookbook } from "@/lib/cms";

export default async function LookbookPage() {
  const items = await getLookbook();

  return (
    <div className="pb-8">
      <PageHero
        label="LOOKBOOK"
        title="아이셋 룩북"
        description="조용하고 정돈된 일상 속 착용 장면을 보여주는 편집형 섹션"
      />
      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item._id} className="card space-y-3">
            <div className="relative h-52 overflow-hidden rounded-xl bg-stone">
              <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
            </div>
            <p className="text-xs tracking-widest text-point">{item.season}</p>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-point">{item.caption}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
