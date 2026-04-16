import { PageHero } from "@/components/page-hero";
import { getFaq } from "@/lib/cms";

export default async function FaqPage() {
  const faq = await getFaq();

  return (
    <div className="pb-8">
      <PageHero
        label="FAQ"
        title="자주 묻는 질문"
        description="운영자는 Sanity에서 질문/답변을 추가 또는 수정할 수 있습니다."
      />
      <div className="space-y-3">
        {faq.map((item) => (
          <details key={item._id} className="card group" open={item._id === faq[0]?._id}>
            <summary className="cursor-pointer list-none text-sm font-medium">Q. {item.question}</summary>
            <p className="mt-3 border-t border-stone pt-3 text-sm leading-7 text-point">A. {item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
