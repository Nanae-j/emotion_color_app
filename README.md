<div id="top"></div>

## 使用技術一覧

<div style="display: inline">

  <!-- フロントエンドのフレームワーク一覧 -->
  <a href="https://nodejs.org/ja">
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  </a>
  <a href="https://nextjs.org/">
  <img src="https://img.shields.io/badge/-Next.js-blue.svg?logo=next.js&style=for-the-badge">
  </a>
  <!-- フロントエンドの言語 -->
  <a href="http://ja.react.dev/">
  <img src="https://img.shields.io/badge/-React-23272f.svg?logo=react&style=for-the-badge">
  </a>
  <a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/-Typescript-FFF.svg?logo=typescript&style=for-the-badge">
  </a>
  
  <!-- ミドルウェア -->
  <a href="https://microcms.io/">
  <img src="https://img.shields.io/badge/-microCMS-563bff.svg?logo=microcms&style=for-the-badge">
  </a>

</div>

#### 使用ライブラリ
<div>
  <!-- 使用ライブラリ -->
  <p></p>
</div>


## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)


<!-- プロジェクトの概要を記載 -->

## プロジェクトについて


<p align="right">(<a href="#top">トップへ</a>)</p>



<!-- プロジェクトの環境を記載 -->

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Node.js               | 18.20.4    |
| Next.js               | 14.2.0    |
| React                 | 18.3.1     |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>


## ディレクトリ構成

```
.
├── .env
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── Calendar.css
│   ├── components
│   │   ├── Calendar.tsx
│   │   ├── DailySummary.tsx
│   │   ├── MonthlySummary.tsx
│   │   ├── TransactionForm.tsx
│   │   ├── TransactionMenu.tsx
│   │   ├── common
│   │   └── layout
│   ├── firebase.ts
│   ├── index.css
│   ├── index.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── NoMatch.tsx
│   │   └── Report.tsx
│   ├── theme
│   │   └── theme.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       ├── financeCalculations.ts
│       └── formatting.ts
└── tsconfig.json
```

 補足
```
├── components
│   ├── common - 複数のファイルで呼び出す汎用コンポーネント
│   └── layout - アプリ全体のレイアウト
├── pages
├── theme - MUIテーマの拡張
├── types - アプリ全体で使用する型定義
└── utils - アプリ全体で使用する汎用関数
               ├── financeCalculations.ts - 収支計算に関する関数
               └── formatting.ts - 日付や金額のデータをフォーマットする関数
```

<p align="right">(<a href="#top">トップへ</a>)</p>


## 開発環境構築

In the project directory, you can run:

#### `npm install`

### .env ファイルを作成 (.env-sampleあり)

以下の環境変数の一覧を元に作成

```
### 環境変数の一覧

| 変数名                 | 役割                                   
| ----------------------| ----------------------------------------------------------------
| FIREBASE_API_KEY      | household-typescriptプロジェクトのAPIキー(収支コレクションの取得に使用)

```

### 動作確認

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<p align="right">(<a href="#top">トップへ</a>)</p>


