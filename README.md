# 언넝 홈페이지

주식회사 언넝의 공식 홈페이지입니다. B2B 플랫폼 회사로서 퀵서비스 플랫폼을 포함한 다양한 업무 전산 제품을 소개합니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 페이지
│   ├── products/           # 제품 페이지
│   │   ├── page.tsx        # 제품 목록
│   │   └── unnung-quick/   # 언넝 퀵 상세
│   ├── technology/         # 기술/솔루션 페이지
│   ├── about/              # 회사 소개 페이지
│   └── contact/            # 문의 페이지
├── components/             # 재사용 가능한 컴포넌트
│   ├── Header.tsx          # 헤더 네비게이션
│   ├── Footer.tsx          # 푸터
│   ├── Button.tsx          # 버튼 컴포넌트
│   ├── Container.tsx       # 컨테이너 레이아웃
│   └── Section.tsx         # 섹션 레이아웃
└── public/                 # 정적 파일
```

## 페이지 구성

1. **Home** (`/`) - 회사 소개 및 주요 가치 제안
2. **Products** (`/products`) - 제품 목록
   - 언넝 퀵 (`/products/unnung-quick`) - 퀵서비스 플랫폼 상세
   - 언넝 오더 - 주문/정산 시스템
   - 언넝 ERP - 통합 ERP (출시 예정)
3. **Technology** (`/technology`) - 기술 및 솔루션
4. **About** (`/about`) - 회사 소개
5. **Contact** (`/contact`) - 도입 문의

## 디자인 원칙

- **B2B SaaS 스타일**: 심플하고 정제된 디자인
- **최소한의 컬러**: Primary Blue와 Gray 톤 사용
- **확장 가능한 구조**: 컴포넌트 기반 설계로 제품 추가 용이
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원

## 배포

Vercel에 배포하기:

```bash
vercel
```

또는 GitHub 저장소와 연동하여 자동 배포를 설정할 수 있습니다.

## 라이선스

© 2024 주식회사 언넝. All rights reserved.
