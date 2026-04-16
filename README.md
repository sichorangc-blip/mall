# ISET 브랜드 홈페이지 v1 (기본형)

아이셋(ISET) 브랜드의 **1차 버전 뼈대 프로젝트**입니다.
목표는 화려한 기능보다 **운영 가능한 구조 + CMS 연동 가능성**입니다.

## 기술 스택
- Next.js (App Router)
- Tailwind CSS
- Sanity CMS (schema 포함)
- Vercel 배포 기준

## 페이지 구성
- `/` HOME
- `/brand` BRAND
- `/collection` COLLECTION
- `/lookbook` LOOKBOOK
- `/faq` FAQ

## 핵심 방향
- 모바일 퍼스트
- 정돈된 생활위생 브랜드 무드
- 구매 기능 제외, 외부 링크(스마트스토어)만 연결
- 운영자가 CMS에서 텍스트/이미지 변경 가능하도록 구조화

---

## 폴더 구조 (핵심)
```bash
app/
  page.tsx
  brand/page.tsx
  collection/page.tsx
  lookbook/page.tsx
  faq/page.tsx
components/layout/
lib/sanity/
sanity/schemaTypes/
```

## 빠른 시작 (초보자용)

### 1) 설치
```bash
npm install
```

### 2) 환경변수 설정
프로젝트 루트에 `.env.local` 파일 생성:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

> 아직 Sanity를 연결하지 않아도, 화면은 fallback 데이터로 동작합니다.

### 3) 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 접속

### 4) 빌드 확인
```bash
npm run build
npm run start
```

---

## Sanity CMS 연동 순서

### 1) Sanity 프로젝트 생성
```bash
npm create sanity@latest
```
- 같은 프로젝트 ID / dataset을 `.env.local`에 입력

### 2) 스키마 반영
이 레포의 `sanity/schemaTypes` 문서 타입을 Sanity Studio 프로젝트에 복사/연결.
- Brand Story
- Product
- Lookbook
- FAQ

### 3) 콘텐츠 입력
Sanity Studio에서 문서를 생성/입력하면 사이트에 반영됩니다.

---

## Vercel 배포

### 1) GitHub 업로드
```bash
git init
git add .
git commit -m "init: ISET v1 skeleton"
```

### 2) Vercel Import
- Vercel에서 GitHub 레포 import
- Framework: Next.js (자동 감지)
- Environment Variables에 아래 추가:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`

### 3) Deploy
Deploy 후 즉시 공개 URL 생성

---

## 2가지 방향 제안 (이번 요청용)

### 방향 A. **브랜드 소개 중심형 (현재 구현형) — 추천**
- 특징: 브랜드 스토리와 제품 신뢰감을 우선 전달
- 장점: 운영 난이도 낮음, CMS 입력 항목 단순, 유지보수 쉬움
- 적합: 초기 런칭/콘텐츠 적은 단계

### 방향 B. **룩북 확장형**
- 특징: LOOKBOOK 비중을 높이고 시즌/테마 기반 큐레이션 강화
- 장점: 비주얼 브랜딩 강화, SNS/콘텐츠 연계 쉬움
- 고려: 이미지 운영 리소스 필요, 촬영/에셋 품질이 중요

> 1차 버전은 **A로 시작**하고, 실제 촬영 리소스가 쌓이면 B 요소를 점진 도입하는 전략을 권장합니다.

---

## 운영 팁
- 로고는 현재 텍스트 기반(`ISET`)으로 배치되어 있어, 추후 이미지 로고로 쉽게 교체 가능
- 제품 상세/재고/결제는 제외(외부 스마트스토어 링크만 유지)
- FAQ와 브랜드 문구는 자주 갱신하므로 CMS에서 우선 관리
