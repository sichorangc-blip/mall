import Link from "next/link";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/brand", label: "BRAND" },
  { href: "/collection", label: "COLLECTION" },
  { href: "/lookbook", label: "LOOKBOOK" },
  { href: "/faq", label: "FAQ" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone bg-mist/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-4 py-4">
        <Link href="/" className="leading-tight">
          <p className="text-lg font-semibold">아이셋</p>
          <p className="text-xs uppercase tracking-[0.28em] text-point">ISET / iii</p>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-3 text-xs tracking-wide text-point">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
