# ISET 공식 홈페이지 MVP

Next.js 14 App Router, TypeScript, Tailwind CSS 기반의 아이셋(ISET) 브랜드 쇼룸형 홈페이지입니다.

## 로컬에서 확인하기

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## Vercel에서 확인하기

Vercel 프로젝트 생성 시 아래 설정을 확인하세요.

- Framework Preset: `Next.js`
- Root Directory: 저장소 루트(`/workspace/mall`의 내용이 올라간 위치)
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: 비워두기

이 프로젝트는 `vercel.json`에 Next.js 프레임워크와 빌드 명령을 명시해 두었습니다.

## Vercel에서 404가 나올 때 체크리스트

1. GitHub에 최신 커밋이 push 되었는지 확인합니다.
2. Vercel 프로젝트의 Root Directory가 `package.json`이 있는 폴더를 가리키는지 확인합니다.
3. Vercel 배포 로그에서 `npm run build`가 성공했는지 확인합니다.
4. Output Directory를 직접 `out`, `dist`, `public` 등으로 설정했다면 비워둡니다. Next.js는 Vercel이 `.next` 빌드 결과를 자동 처리합니다.
5. 환경변수나 별도 서버 설정은 필요하지 않습니다.

## 콘텐츠 수정 위치

- 브랜드/제품/외부 링크: `data/site.ts`
- News 게시글: `data/news.ts`
