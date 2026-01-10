# GitHub에 푸시하는 방법

## 저장소가 아직 생성되지 않은 경우:

1. GitHub CLI를 사용하여 인증:
   ```bash
   gh auth login
   ```

2. 인증 후 저장소 생성 및 푸시:
   ```bash
   gh repo create hw_homepage --public --source=. --remote=origin --push
   ```

## 또는 GitHub 웹에서 수동으로 생성:

1. https://github.com/new 접속
2. 저장소 이름: `hw_homepage`
3. Public 선택
4. README, .gitignore, license는 추가하지 않음 (이미 있음)
5. Create repository 클릭

6. 생성 후 다음 명령어 실행:
   ```bash
   git remote add origin https://github.com/parkjaiwoong/hw_homepage.git
   git branch -M main
   git push -u origin main
   ```

## 이미 저장소가 생성된 경우:

```bash
git remote add origin https://github.com/parkjaiwoong/hw_homepage.git
git branch -M main
git push -u origin main
```
