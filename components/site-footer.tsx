export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-stone">
      <div className="mx-auto flex w-full max-w-content flex-col gap-3 px-4 py-8 text-xs text-point">
        <p>Set for us, I set</p>
        <p>© {new Date().getFullYear()} ISET. All rights reserved.</p>
        <p>구매처: 네이버 스마트스토어</p>
      </div>
    </footer>
  );
}
