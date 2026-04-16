# ISET (아이셋) 브랜드 사이트 v1

아이셋 브랜드 홈페이지 1차 버전입니다.
핵심 목표는 **완성형 쇼핑몰이 아닌, 운영 가능한 구조 + CMS 연동 뼈대**입니다.

## 기술 스택
- Next.js (App Router)
- Tailwind CSS
- Sanity CMS
- Vercel 배포 기준

## 포함된 페이지
- HOME `/`
- BRAND `/brand`
- COLLECTION `/collection`
- LOOKBOOK `/lookbook`
- FAQ `/faq`

## 프로젝트 구조

```bash
.
├─ app/
│  ├─ page.tsx
│  ├─ brand/page.tsx
│  ├─ collection/page.tsx
│  ├─ lookbook/page.tsx
│  ├─ faq/page.tsx
│  ├─ layout.tsx
│  └─ globals.css
├─ components/
│  ├─ site-header.tsx
│  ├─ site-footer.tsx
│  └─ page-hero.tsx
├─ lib/
│  ├─ cms.ts
│  ├─ sample-data.ts
│  ├─ types.ts
│  └─ sanity/
│     ├─ client.ts
│     └─ queries.ts
├─ sanity/
│  ├─ sanity.config.ts
│  └─ schemas/
│     ├─ index.ts
│     ├─ brandStory.ts
│     ├─ product.ts
│     ├─ lookbook.ts
│     └─ faq.ts
└─ .env.example
```

## 시작하기 (초보자용)

### 1) 설치
```bash
npm install
```

### 2) 환경변수 설정
`.env.example` 파일을 복사해 `.env.local` 생성 후 값 입력:

```bash
cp .env.example .env.local
```

필수 값:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

> 아직 Sanity 프로젝트가 없다면 비워둔 상태로도 실행 가능하며, 샘플 데이터가 표시됩니다.

### 3) 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 접속

### 4) Sanity Studio 실행 (선택)
```bash
npm run sanity:dev
```

## Sanity 운영 포인트
다음 항목은 CMS에서 수정 가능하도록 설계됨:
- 브랜드 스토리 (`brandStory`)
- 제품 목록 (`product`)
- 룩북 (`lookbook`)
- FAQ (`faq`)

Next.js는 데이터가 없을 때 샘플 데이터를 fallback으로 보여주므로,
초기 구축 단계에서 바로 화면 확인 가능합니다.

## Vercel 배포
1. GitHub에 이 저장소 push
2. Vercel에서 Import Project
3. 환경변수(`.env.example`의 키들) 추가
4. Build Command: `npm run build`
5. Output: Next.js 기본값 사용

## 1차 버전 디자인 방향
- 모바일 퍼스트
- 넓은 여백 + 단정한 카드
- 화이트 / 소프트 그레이 / 차분한 포인트 컬러
- 과한 애니메이션 없음
- 구매는 외부 링크(네이버 스마트스토어)로만 이동

## 2가지 운영 방향 제안

### 방향 A: 브랜드 에디토리얼 중심 (현재 구현에 가까움)
- 브랜드 메시지 강조
- 룩북/스토리 텍스트 비중 높음
- 컬렉션은 간결 카드로 노출
- 장점: 브랜드 무드 전달에 강함

### 방향 B: 제품 정보 중심 카탈로그
- COLLECTION을 첫 화면 핵심으로 배치
- 제품별 핵심 포인트/규격 정보를 CMS 필드로 확대
- 룩북은 보조 콘텐츠로 배치
- 장점: 정보 탐색 속도와 비교 효율이 높음

---

필요 시 2차 버전에서 다음을 추가할 수 있습니다:
- 다국어(KR/EN)
- 카테고리 필터
- Sanity 실시간 미리보기
- OG 이미지 자동화
