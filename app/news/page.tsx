'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { sortedNewsPosts, type NewsCategory } from '@/data/news';
const tabs=['전체','공지','보도자료','이벤트','가이드'] as const;
export default function NewsPage(){const [active,setActive]=useState<(typeof tabs)[number]>('전체');const posts=useMemo(()=>active==='전체'?sortedNewsPosts:sortedNewsPosts.filter((p)=>p.category===active as NewsCategory),[active]);return <div className="container-narrow py-10"><h1 className="text-3xl font-bold">ISET News</h1><p className="mt-2 text-neutral-600">아이셋의 새로운 소식과 제품 안내를 전합니다.</p><div className="mt-4 flex flex-wrap gap-2">{tabs.map((tab)=><button key={tab} onClick={()=>setActive(tab)} className={`rounded-full border px-4 py-1 text-sm ${active===tab?'bg-iset-navy text-white':''}`}>{tab}</button>)}</div><div className="mt-6 space-y-3">{posts.map((p)=><Link href={`/news/${p.slug}`} key={p.slug} className="card block"><p className="text-xs text-iset-navy">{p.category}</p><h2 className="font-semibold">{p.title}</h2><p className="text-xs text-neutral-500">{p.date}</p><p className="mt-2 text-sm text-neutral-600">{p.summary}</p></Link>)}</div></div>}
