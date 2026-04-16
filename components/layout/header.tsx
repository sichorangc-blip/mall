import Link from 'next/link';

const menu = [
  { href: '/', label: 'HOME' },
  { href: '/brand', label: 'BRAND' },
  { href: '/collection', label: 'COLLECTION' },
  { href: '/lookbook', label: 'LOOKBOOK' },
  { href: '/faq', label: 'FAQ' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-iset-soft bg-iset-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold tracking-[0.2em]">ISET</span>
          <span className="text-[11px] text-gray-500">Set for us, I set</span>
        </Link>
        <nav className="flex gap-3 overflow-x-auto text-xs font-medium text-gray-600">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-2 py-1 hover:bg-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
