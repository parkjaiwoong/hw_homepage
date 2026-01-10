# GitHub 푸시 방법

## 방법 1: GitHub CLI 사용 (가장 쉬움)

```bash
gh auth login
```

프롬프트에서:
- GitHub.com 선택
- HTTPS 선택  
- `parkjaiwoong` 계정으로 로그인

그 다음:
```bash
git push -u origin main
```

## 방법 2: Personal Access Token 사용

1. https://github.com/settings/tokens 접속
2. "Generate new token" > "Generate new token (classic)" 클릭
3. Token name: `hw_homepage` 입력
4. `repo` 권한 체크
5. "Generate token" 클릭 후 토큰 복사

6. 푸시 명령어 실행:
```bash
git push -u origin main
```

Username: `parkjaiwoong`
Password: (복사한 토큰 붙여넣기)

## 방법 3: SSH 사용

원격 URL을 SSH로 변경:
```bash
git remote set-url origin git@github.com:parkjaiwoong/hw_homepage.git
```

SSH 키가 설정되어 있다면:
```bash
git push -u origin main
```

SSH 키가 없다면:
1. SSH 키 생성: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. 공개 키를 GitHub에 추가: https://github.com/settings/keys
