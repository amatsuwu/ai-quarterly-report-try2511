# Git 指令指南

這份文件說明了常用的 Git 指令及其用途。

## 1. 初始化與推送到遠端 (Initialize & Push)

如果你有一個全新的專案，想要建立 Git 儲存庫並推送到 GitHub：

```bash
# 初始化 Git 儲存庫
git init

# 將當前目錄下的所有檔案加入暫存區 (Staging Area)
git add .

# 建立第一次提交 (Commit)，訊息為 "Initial commit"
git commit -m "Initial commit"

# 設定遠端儲存庫網址 (origin)
git remote add origin https://github.com/amatsuwu/ai-quarterly-report-try2511.git

# 將目前分支重新命名為 main (GitHub 預設主分支名稱)
git branch -M main

# 推送 main 分支到遠端 origin，並設定追蹤 (-u 代表 upstream)
git push -u origin main
```

## 2. 建立 README 並同步 (Create README & Sync)

如果遠端有更新（例如在 GitHub 上建立了 README），你需要先拉取下來：

```bash
# 從遠端 origin 拉取 main 分支的更新，並使用 rebase 方式合併 (保持提交歷史乾淨)
git pull origin main --rebase
```

## 3. 修改檔案或新增檔案後推送 (File Changes & Push)

當你修改了檔案（例如改檔名）或新增了檔案（例如 `README.md`）後的標準流程：

```bash
# 將 README.md 加入暫存區 (若有多個檔案修改，也可以用 git add .)
git add README.md

# 提交變更，訊息為 "Add README.md"
git commit -m "Add README.md"

# 推送到遠端 main 分支 (因為之前已經下過 -u，之後可以直接下 git push)
git push origin main
```
