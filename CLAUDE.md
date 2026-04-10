@AGENTS.md

# TNO 欣展官方網站

船舶裝修公司官方網站。Next.js 16 App Router + TypeScript + Tailwind CSS。

## 專案概述

- **客戶**：TNO 欣展有限公司（高雄，船舶裝修）
- **目標**：SEO 優化的官方網站，產品與案例需方便維護更新
- **設計來源**：Figma（深海藍色系，暗色主題）

## 技術架構

- **Framework**：Next.js 16（App Router）
- **語言**：TypeScript
- **樣式**：Tailwind CSS（無額外 UI 套件）
- **字型**：Noto Sans TC（Google Fonts）
- **內容管理**：純 TypeScript 檔案（無 CMS，無資料庫）
- **部署目標**：靜態生成（SSG）

## 頁面路由

| 路由 | 說明 |
|---|---|
| `/` | 首頁 |
| `/service` | 服務項目 |
| `/product` | 產品列表 |
| `/product/[slug]` | 產品詳情（generateStaticParams） |
| `/case` | 實績案例列表 |
| `/case/[slug]` | 案例詳情（generateStaticParams） |
| `/about` | 關於欣展 |
| `/contact` | 聯絡我們 |
| `/sitemap.xml` | 自動生成 |
| `/robots.txt` | 自動生成 |

## 內容管理（重要）

產品與案例以 TypeScript 檔案管理，**不使用資料庫或 CMS**。

### 新增產品
1. 複製 `src/content/products/_template.ts` → 改名為 `[slug].ts`
2. 填入資料
3. 在 `src/content/products/index.ts` 的 `allProducts` 陣列加入 import
4. 圖片放至 `public/images/products/`

### 新增案例
1. 複製 `src/content/cases/_template.ts` → 改名為 `[slug].ts`
2. 填入資料（新案例放陣列最前面，優先顯示）
3. 在 `src/content/cases/index.ts` 的 `allCases` 陣列加入 import
4. 圖片放至 `public/images/cases/`

### 隱藏但不刪除
將 `isPublished: false` 即可隱藏，不會出現在網站或 sitemap 中。

### 首頁精選商品／案例圖片（重要規則）

首頁的「精選商品」和「實績案例」使用**專屬的首頁圖片**，與產品／案例詳情頁的 `coverImage` **完全無關**。

- 首頁圖片配置集中在 `src/content/homeConfig.ts`，使用 `/images/home/` 路徑
- **更換首頁展示圖** → 只修改 `homeConfig.ts` 的 `homeImage` 欄位
- **更換產品／案例的封面圖** → 只修改對應 content 檔案的 `coverImage`
- ❌ 不可讓首頁 section 直接讀取 `product.coverImage` 或 `caseItem.coverImage`
- ❌ 不可在 product/case content 檔案裡填寫 `/images/home/` 路徑（反向耦合）

## 目錄結構

```
src/
├── app/                    # Next.js App Router 頁面
│   ├── layout.tsx          # 全域 layout + metadata
│   ├── page.tsx            # 首頁
│   ├── not-found.tsx       # 404 頁面
│   ├── sitemap.ts          # 動態 sitemap
│   ├── robots.ts           # robots.txt
│   ├── service/page.tsx
│   ├── product/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── case/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # 固定導覽列
│   │   └── Footer.tsx      # 頁尾
│   ├── home/               # 首頁各 section 元件
│   │   ├── HomeHero.tsx
│   │   ├── HomeServices.tsx
│   │   ├── HomeProducts.tsx
│   │   ├── HomeCases.tsx
│   │   ├── HomeWhyChoose.tsx
│   │   ├── HomeBrandCTA.tsx
│   │   ├── HomeContactCTA.tsx
│   │   └── HomeCertifications.tsx
│   └── ui/                 # 共用 UI 元件
│       ├── Button.tsx      # CTA 按鈕（見下方說明）
│       └── ArrowIcon.tsx   # 右箭頭 SVG
├── content/                # 內容資料（新增產品/案例在這裡）
│   ├── products/
│   │   ├── index.ts        # 產品管理入口
│   │   ├── _template.ts    # 新增產品範本
│   │   └── *.ts            # 各產品資料
│   └── cases/
│       ├── index.ts        # 案例管理入口
│       ├── _template.ts    # 新增案例範本
│       └── *.ts            # 各案例資料
├── types/
│   ├── product.ts          # Product 型別
│   └── case.ts             # CaseProject 型別
└── lib/                    # 工具函式（預留）
```

### public/images/ 子目錄

```
public/images/
├── common/     # logo.svg、logo_fullname.svg
├── home/       # 首頁用圖（hero、各 section 背景、認證機構 logo）
├── products/   # 產品圖片（命名：[slug]-cover.jpg、[slug]-1.jpg …）
├── cases/      # 案例圖片（命名：[slug]-cover.jpg、[slug]-1.jpg …）
├── service/    # 服務頁圖片
└── about/      # 關於頁圖片
```

## UI 元件

### Button（`src/components/ui/Button.tsx`）

所有頁面的 CTA 連結按鈕統一使用此元件，**不要自行寫 `<a>` 或 `<Link>` 搭配按鈕樣式**。

```tsx
<Button href="/contact" variant="outline">聯絡我們</Button>
<Button href="/product" variant="primary" showArrow={false}>查看產品</Button>
```

| prop | 型別 | 預設 | 說明 |
|---|---|---|---|
| `href` | string | 必填 | 目標路由 |
| `variant` | `"primary"` \| `"outline"` | `"primary"` | primary = 藍底白字；outline = 白框（深色背景上用） |
| `showArrow` | boolean | `true` | 是否顯示右箭頭圖示 |
| `className` | string | `""` | 額外 class |

> Tailwind 自訂色：`bg-brand`（`#0c74b5`）、`bg-brand-hover`（`#0a62a0`），定義於 `globals.css`。

## 設計規範

### Tailwind Design Token 規則

**所有樣式一律使用 Tailwind class + `globals.css` 的 `@theme` token，嚴禁以下寫法：**

- ❌ 直接寫死 hex：`text-[#2e3b5d]`、`bg-[#002044]`
- ❌ 靜態 inline style：`style={{ color: "#2e3b5d" }}`、`style={{ background: "#f7f8fa" }}`

**例外（允許保留）：**
- 動態 inline style（值由 JS 運算決定，無法用 Tailwind class 表達）
- SVG 屬性（`stroke`、`fill`）的動態值
- `linear-gradient` 等 Tailwind 無法直接表達的漸層語法

遇到現有 token 無法覆蓋的新顏色，才在 `globals.css` 新增 token，並更新 CLAUDE.md 的色彩表。

| Token | 值 | 用途 |
|---|---|---|
| `brand` | `#0c74b5` | 按鈕主色 |
| `brand-hover` | `#0a62a0` | 按鈕 hover |
| `brand-deep` | `#1E6FBA` | 品牌藍（標籤、漸層起點） |
| `brand-light` | `#4DA3D4` | 輔助藍（漸層終點） |
| `title` | `#2e3b5d` | 標題文字 |
| `body` | `#4b5f7a` | 內文 |
| `muted` | `#7e7e7e` | 次要文字 |
| `navy` | `#002044` | 深底色 |
| `page` | `#f7f8fa` | 頁面底色 |
| `surface` | `#ecf0f6` | 卡片底色 |
| `sky` | `#bee0ff` | About 頁信念 section 裝飾卡片 |
| `sky-light` | `#ddf3ff` | About 頁專業 section 裝飾卡片 |

### 色彩
- 主背景：`#0B1929`
- 深底色：`#071018`
- 次要背景：`#0A1520`
- 品牌藍：`#1E6FBA`
- 輔助藍：`#4DA3D4`

### 版型
- 最大寬度：`max-w-[1400px]`
- 標準水平 padding：`px-[60px]`（桌面），行動版 `px-4`
- Header 高度：`70px`

### 按鈕樣式（設計稿統一規範）
- 主要 CTA：邊框按鈕（`border border-white/60`）+ 右箭頭圖示
- 不使用實心背景色按鈕（`bg-[#1E6FBA]` 風格已棄用）

### 文字
- 頁面大標題：`text-[56px] font-bold`
- 節標題：`text-[40px] font-bold`
- 說明文字：`text-white/60`

## SEO 規範

每個頁面都需要：
- `generateMetadata` 函式（或 export `metadata`）
- 唯一的 `title` 與 `description`
- `alternates.canonical`

動態頁面（產品/案例詳情）額外需要：
- `generateStaticParams`（確保靜態生成）
- JSON-LD 結構化資料

## 圖片管理

- 所有圖片放在 `public/images/` 下對應子目錄
- 使用 Next.js `<Image>` 元件（必填 `alt`）
- Hero / 背景圖加 `priority` prop
- 圖片命名格式：`[slug]-cover.jpg`、`[slug]-1.jpg`

## 環境變數

| 變數 | 說明 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 正式網域（影響 sitemap / canonical / OG） |

## Git 工作流程

當使用者要求「上 git」、「commit」或類似指示，執行順序為：
1. `git add` 相關檔案
2. `git commit` 附上說明
3. `git push` 同步到 GitHub

每次 commit 後務必接著 push，確保本機與 GitHub 保持同步。

## 常用指令

```bash
npm run dev    # 開發伺服器
npm run build  # 生產建置（驗證型別與編譯）
npm run lint   # ESLint 檢查
```

## 聯絡資訊（實際資料）

- **地址**：高雄市仁武區鳳仁路307巷68號
- **電話**：07-3717521
- **傳真**：07-3711073
- **Email**：tno.tw@msa.hinet.net
