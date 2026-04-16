export function Footer() {
  return (
    <footer className="border-t border-iset-soft bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-gray-500 sm:px-6">
        <p>ISET / iii</p>
        <p>생활위생 브랜드의 더 나은 일상 세팅을 위한 기본형 홈페이지 v1</p>
        <p>© {new Date().getFullYear()} ISET. All rights reserved.</p>
      </div>
    </footer>
  );
}
