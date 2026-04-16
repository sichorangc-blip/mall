import { getFaq } from '@/lib/sanity/fetch';

export default async function FaqPage() {
  const faq = await getFaq();

  return (
    <section className="space-y-4">
      <div className="section-card">
        <h1 className="section-title">FAQ</h1>
        <p className="section-subtitle">운영자가 자주 묻는 질문을 CMS에서 직접 관리할 수 있습니다.</p>
      </div>

      <div className="space-y-3">
        {faq.map((item) => (
          <article key={item._id} className="section-card">
            <h2 className="font-semibold">Q. {item.question}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">A. {item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
