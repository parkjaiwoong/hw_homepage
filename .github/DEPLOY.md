# Vercel 배포 가이드

## 자동 배포 설정 (GitHub 연동)

### 방법 1: Vercel 웹사이트에서 연동 (추천)

1. **Vercel에 로그인**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 Import**
   - Dashboard에서 "Add New..." > "Project" 클릭
   - GitHub 저장소 목록에서 `parkjaiwoong/hw_homepage` 선택
   - "Import" 클릭

3. **프로젝트 설정**
   - Framework Preset: `Next.js` (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (기본값)
   - Output Directory: `.next` (자동 설정)
   - Install Command: `npm install` (기본값)

4. **환경 변수** (필요시)
   - 현재는 환경 변수 없음

5. **Deploy**
   - "Deploy" 버튼 클릭
   - 배포 완료 후 자동으로 URL 제공 (예: `hw-homepage.vercel.app`)

### 방법 2: Vercel CLI 사용

```bash
# Vercel 로그인 (대화형)
vercel login

# 프로젝트 배포
vercel

# 프로덕션 배포
vercel --prod
```

### GitHub 연동 후 자동 배포

Vercel에 GitHub 저장소를 연결하면:
- ✅ `main` 브랜치에 푸시할 때마다 자동 배포
- ✅ Pull Request마다 Preview 배포
- ✅ 자동 빌드 및 배포

## 프로젝트 설정

프로젝트는 이미 Next.js 14 App Router로 설정되어 있으며, Vercel에서 자동으로 감지됩니다.

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 도메인 설정

Vercel에서 프로젝트를 배포한 후:
1. 프로젝트 Settings > Domains
2. 원하는 도메인 추가 (예: `unnung.com`)
3. DNS 설정에 따라 도메인 연결
