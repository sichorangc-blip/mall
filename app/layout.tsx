import './globals.css';
import Link from 'next/link';
import { site } from '@/data/site';

const menus = [
  ['Home', '/'], ['Brand', '/brand'], ['Products', '/products'], ['Lookbook', '/lookbook'], ['News', '/news'], ['FAQ', '/faq'],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>
    <header className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur"><div className="container-narrow flex items-center justify-between py-4">
      <Link href="/" className="text-2xl font-bold">ISET</Link>
      <nav className="hidden gap-5 md:flex">{menus.map(([n,h])=><Link key={h} href={h} className="text-sm text-neutral-700">{n}</Link>)}</nav>
      <a href={site.links.smartstore} className="rounded-full bg-iset-navy px-4 py-2 text-sm text-white">스토어 바로가기</a>
    </div></header>
    <main>{children}</main>
    <footer className="mt-16 border-t bg-iset-ivory"><div className="container-narrow py-10 text-sm text-neutral-700"><p className="font-semibold">{site.brand.name} {site.brand.koreanName}</p><div className="mt-3 flex flex-wrap gap-4"><a href={site.links.smartstore}>스마트스토어</a><a href={site.links.instagram}>인스타그램</a><span>{site.brand.support}</span><a href={`mailto:${site.links.email}`}>{site.links.email}</a></div></div></footer>
  </body></html>;
}
