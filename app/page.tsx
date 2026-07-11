import Link from 'next/link';
import { site } from '@/data/site';
import { sortedNewsPosts } from '@/data/news';

export default function Home() {
  return <div className="container-narrow space-y-10 py-10">
    <section className="rounded-3xl bg-iset-lilac p-8"><h1 className="text-4xl font-bold">{site.brand.slogan}</h1><p className="mt-3 text-xl">{site.brand.description}</p><p className="mt-3 text-neutral-700">일상 속 작은 불편을 세심하게 관찰하고, 가족에게 필요한 기준으로 다시 세팅합니다.</p><div className="mt-6 flex gap-3"><Link href="/brand" className="rounded-full border px-4 py-2">브랜드 보기</Link><Link href="/products" className="rounded-full border px-4 py-2">제품 보기</Link><a href={site.links.smartstore} className="rounded-full bg-iset-navy px-4 py-2 text-white">스토어 바로가기</a></div></section>
    <section><h2 className="mb-4 text-2xl font-semibold">Brand Promise</h2><div className="grid gap-4 md:grid-cols-3">{['가족 기준으로 고른 제품','일상에서 바로 쓰기 좋은 실용성','과장보다 신뢰를 우선하는 설명'].map((x)=><div key={x} className="card"><h3 className="font-semibold">{x}</h3></div>)}</div></section>
    <section><h2 className="mb-4 text-2xl font-semibold">Product Preview</h2><div className="grid gap-4 md:grid-cols-2">{site.products.map((p)=><div key={p.id} className="card"><div className="h-36 rounded-xl bg-iset-lilac"/><h3 className="mt-3 font-semibold">{p.name}</h3><p className="text-sm text-neutral-600">{p.short}</p><Link href={`/products#${p.id}`} className="mt-2 inline-block text-sm text-iset-navy">자세히 보기</Link></div>)}</div></section>
    <section><h2 className="mb-4 text-2xl font-semibold">Use Case</h2><div className="grid gap-4 md:grid-cols-4">{site.useCases.map((u)=><div key={u} className="card text-sm">{u}</div>)}</div></section>
    <section><h2 className="mb-4 text-2xl font-semibold">Lookbook Preview</h2><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{Array.from({length:8}).map((_,i)=><div key={i} className="h-24 rounded-xl bg-neutral-100"/>)}</div></section>
    <section><h2 className="mb-2 text-2xl font-semibold">News Preview</h2>{sortedNewsPosts.slice(0,3).map((n)=><Link key={n.slug} href={`/news/${n.slug}`} className="block border-b py-3 text-sm">[{n.category}] {n.title}</Link>)}<Link href="/news" className="mt-3 inline-block rounded-full border px-4 py-2">소식 더 보기</Link></section>
    <section className="rounded-2xl bg-iset-navy p-8 text-white"><p>아이셋의 제품은 공식 스토어에서 확인하실 수 있습니다.</p><a href={site.links.smartstore} className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-iset-navy">스마트스토어 바로가기</a></section>
  </div>;
}
