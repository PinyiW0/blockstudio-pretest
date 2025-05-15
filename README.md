# BLOCKSTUDIO-PRETEST

## 專案預覽
👉 [Demo 預覽連結](https://blockstudio-pretest.vercel.app/)

---

## 技術資訊速覽

| 項目       | 說明                            |
|------------|-------------------------------|
| 前端框架    | Nuxt 3、Vue 3                  |
| 前端語言    | TypeScript、Javascript         |
| CSS        | UnoCSS                        |
| 動畫效果    | Three.js、GSAP、AOS |
| 部署平台    | Vercel                        |

---

## 環境需求
![Node Version](https://img.shields.io/badge/node-20.10.0-blue)

---

- Node.js 版本：20.10.0
```bash

## 📁 專案結構簡介

├── assets/             # 靜態資源
│ ├── stylesheets/      # CSS 設定
├── components/         # 元件
│ ├── animation/        # 動畫元件
│ ├── base/             # 基本元件
│ ├── icon/             # SVG 元件
│ ├── layout/           # 版面元件
│ ├── modal/            # 3D 模型元件
│ ├── mouse/            # 滑鼠互動元件
│ └── ui/               # UI 元件
├── layouts/            # 頁面佈局
├── pages/              # 頁面
├── plugins/            # 第三方套件
│ ├── aos.client.js/    # 初始化 AOS
│ ├── swiper.client.js/ # 初始化 Swiper 
│ ├── three.client.js/  # 初始化 Three 
├── public/             # 字型、圖片、3D 模型
└── README.md           # 專案說明

---

## 快速開始

```bash
# 安裝相依套件
npm install

# 啟動開發伺服器
npm run dev
```

---

## 開發注意事項

- 所有 `img` 必須加上 `alt` 描述屬性
- 標籤寫法
  - 事件 → 共同的樣式（套件原生＋src＋alt）→ 動態 style / 靜態 style → 動態 class / 靜態 class
  - (例：v-if / v-show → v-on  → v-for → :key → style → :class → class )
  - CSS Class Name 寫法：自定義class → 空間佈局 → 呈現樣式 → 效果 
- 每個頁面需遵循 HTML 結構階層：
  - 每頁必須至少有一個 `<h1>` 和 `<h2>`，不可直接跳階（例：要用 `<h4>` 前必須先有 `<h3>`）

---

## Git Commit 提交規範
| 類型     | 說明               |
|----------|--------------------|
| `feat`   | 新增功能           |
| `fix`    | 修復 Bug           |
| `style`  | 調整樣式，無邏輯變動 |
| `perf`   | 效能優化           |
| `refactor` | 程式重構         |
| `revert` | 回復先前的提交     |
| `test`   | 測試相關變更       |
| `docs`   | 文件修改           |
| `chore`  | 專案建置或輔助工具調整 |
| `types`  | Type 定義調整      |
| `wip`    | 開發中，尚未完成的功能 |

---

## 聲明
本專案為版塊前端工程師測試稿用途，非商業用途
