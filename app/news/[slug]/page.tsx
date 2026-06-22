import Link from 'next/link';
import { newsPosts } from '@/data/news';
import { notFound } from 'next/navigation';

export function generateStaticParams(){return newsPosts.map((p)=>({slug:p.slug}));}
export default function NewsDetail({params}:{params:{slug:string}}){const post=newsPosts.find((p)=>p.slug===params.slug);if(!post) return notFound();return <div className="container-narrow py-10"><p className="inline-block rounded-full bg-iset-lilac px-3 py-1 text-xs">{post.category}</p><h1 className="mt-3 text-3xl font-bold">{post.title}</h1><p className="mt-1 text-sm text-neutral-500">{post.date}</p><div className="my-5 h-52 rounded-xl bg-neutral-100"/>{post.content.map((c)=><p key={c} className="mb-3 leading-7">{c}</p>)}<div className="mt-8 flex gap-3"><Link href="/news" className="rounded-full border px-4 py-2">목록으로 돌아가기</Link><a href="https://smartstore.naver.com/iset" className="rounded-full bg-iset-navy px-4 py-2 text-white">스마트스토어 바로가기</a></div></div>}
