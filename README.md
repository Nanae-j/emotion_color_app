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
  <a href="https://supabase.com/">
  <img src="https://img.shields.io/badge/-supabase-272822.svg?logo=supabase&style=for-the-badge">
  </a>
  <a href="https://www.prisma.io/?utm_medium=sidebar-promo&utm_source=docs&utm_campaign=managed-connection-pool">
  <img src="https://img.shields.io/badge/-prisma-55C500.svg?logo=prisma&style=for-the-badge">
  </a>
  <a href="https://clerk.com/">
  <img src="https://img.shields.io/badge/-Clerk-5881D8.svg?logo=clerk&style=for-the-badge">
  </a>
  <a href="http://ngrok.com/">
  <img src="https://img.shields.io/badge/-ngrok-FF1B2D.svg?logo=ngrok&style=for-the-badge">
  </a>

</div>

#### 使用ライブラリ

<div>
  <!-- 使用ライブラリ -->
  <p><a href="https://lottiefiles.com/jp/">Lottie</a></p>
  <p><a href="https://www.prisma.io">prisma</a></p>
  <p><a href="https://clerk.com/">clerk</a></p>
  <p><a href="https://zod.dev/">zod</a></p>
  <p><a href="https://tailwindcss.com/">tailwindcss</a></p>
  <p><a href="http://ngrok.com/">ngrok</a></p>
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
### プロジェクトの概要

<a href="https://www.udemy.com/course/nextjs15-newhooks-with-sns-dev/?couponCode=KEEPLEARNING">参考教材</a>

<p>
  参考動画で学習した後に、アプリのアイディアから制作まで行いました。<br />
  以下のNotionに制作の目的や着想についてまとめておりますので、ご覧頂けますと嬉しいです！<br />
  <a href="https://www.notion.so/HueDay-1ccdf53fe25a8002ac19e6ac36d37481?pvs=4" target="_blank">HueDayについて</a>
</p>

### 苦労したところ
<a href="https://www.notion.so/1b3df53fe25a80e484def839876f8f5f?pvs=4">Notion</a>

### 制作後の振り返り

<p>
  アイデアからDB設計、実装まで一貫して自分でアプリを制作しました。<br />
  Next.jsをベースとして、技術スタックを選定しました。初めての独自アプリ開発だったため、Udemyで類似のSNSアプリ開発講座を参考にしながら進めました。<br />
  現段階では機能面でまだ改善の余地がありますが、自分が構想したアイデアを最小限の形で実現できたことに大きな達成感を感じています。<br />
  これまでのマネジメントやチームメンバーとの関わりから得た経験を活かし、このようなアプリが「頑張る人」を支援し、前向きな成長へと導けるのではないかと考えています。<br />
  アプリ開発の一連のプロセスを実践的に学べたことも大きな成果ですが、今回の着想をさらに発展させ、将来的には多くの挑戦者の支えとなるようなプロダクトを生み出せるエンジニアになりたいと強く思いました！<br />
  技術面でもマネジメント面でもさらなる向上を目指し、この目標を胸に今後のキャリアを築いていきたいと思います。<br />
  ご覧いただきありがとうございました🙇
</p>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Node.js               | 18.20.4    |
| Next.js               | 15.2.1     |
| React                 | 19.0.0     |

その他のパッケージのバージョンは package.json を参照してください

<a href="https://supabase.com/dashboard/projects">supabaseプロジェクト一覧</a>  
開発環境用DB - HueDay-dev  
本番用DB - HueDay  

<a href="https://dashboard.clerk.com/apps/app_2taA5DVxFz0U5n2G4vBp9OrOgMx/instances/ins_2taA57RC5x7gaANrfSejJ1a0dWy">Clerkダッシュボード</a>  
プロジェクト名 - HueDay  
開発環境用 - Development  
本番用 - Production  


<p align="right">(<a href="#top">トップへ</a>)</p>


## ディレクトリ構成

```
.
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prisma
│   ├── migrations
│   │   ├── 20250311041338_init
│   │   ├── 20250318120829_change_comment_color
│   │   └── migration_lock.toml
│   └── schema.prisma
├── src
│   ├── actions (サーバーアクション関数)
│   │   ├── addCommentAction.ts
│   │   ├── addPostAction.ts
│   │   ├── deleteCommentAction.ts
│   │   ├── deletePostAction.ts
│   │   ├── empathyAction.ts
│   │   ├── experinceAction.ts
│   │   ├── followAction.ts
│   │   ├── revalidateUser.ts
│   │   ├── supportAction.ts
│   │   ├── updateCommentAction.ts
│   │   └── updatePostAction.ts
│   ├── app
│   │   ├── api (clerk認証時のwebhookルートハンドラー)
│   │   ├── emotion
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── opengraph-image.alt.txt
│   │   ├── opengraph-image.jpg
│   │   ├── page.tsx
│   │   ├── post
│   │   ├── profile
│   │   ├── sign-in (clerkログインページ)
│   │   ├── twitter-image.alt-txt
│   │   └── twitter-image.jpg
│   ├── components
│   │   ├── ClientHeader.tsx
│   │   ├── CommentDelete.tsx
│   │   ├── CommentEditContext.tsx
│   │   ├── CommentEditDelete.tsx
│   │   ├── CommentEditForm.tsx
│   │   ├── CommentEditManager.tsx
│   │   ├── CommentForm.tsx
│   │   ├── CommentList.tsx
│   │   ├── CommentListItem.tsx
│   │   ├── EmpathyInteraction.tsx
│   │   ├── ExperienceInteraction.tsx
│   │   ├── FollowButton.tsx
│   │   ├── PostDelete.tsx
│   │   ├── PostEditContext.tsx
│   │   ├── PostEditDelete.tsx
│   │   ├── PostEditForm.tsx
│   │   ├── PostEditManager.tsx
│   │   ├── PostForm.tsx
│   │   ├── PostInteraction.tsx
│   │   ├── PostList.tsx
│   │   ├── PostListItem.tsx
│   │   ├── ServerHeader.tsx
│   │   ├── SignOutAlert.tsx
│   │   ├── SupportInterraction.tsx
│   │   └── lottie
│   ├── data
│   │   └── colorsData.ts
│   ├── lib
│   │   └── prisma.ts
│   ├── middleware.ts
│   ├── types (アプリケーション全体で使用する型定義)
│   │   └── types.ts
│   └── utils  (アプリケーション全体で使用する汎用関数)
│       ├── formatContent.ts
│       ├── formatDate.ts
│       ├── generateColorClass.ts
│       ├── getActionData.ts
│       └── getPosts.ts
└── tsconfig.json
```

<p align="right">(<a href="#top">トップへ</a>)</p>


## 開発環境構築

In the project directory, you can run:

#### `npm install`

### .env ファイルを作成

以下の環境変数の一覧を元に作成

```
### 環境変数の一覧

| 変数名                                  | 役割                                   
| ---------------------------------------| ----------------------------------------------------------------
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY      | 
| NEXT_PUBLIC_CLERK_SIGN_IN_URL          | 
| CLERK_SECRET_KEY                       |
| SIGNING_SECRET                         | clerkのwebhook用シークレットキー
| DATABASE_URL                           | supabase接続用

```

### 動作確認

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<p>ローカル環境でwebhookを使用する場合はローカルサーバの立ち上げとしてngrokで一時的な開発サーバを立ち上げること</p>

```
ngrok http 3000
```

<p>ngrokで立ち上がったサーバ名をClerkのwebhookURLとして書き換える</p>
<p>※ngrokを立ち上げたたびにサーバー名変わるので毎回変更するのを忘れずに！</p>

![スクリーンショット 2025-04-03 23 21 05](https://github.com/user-attachments/assets/ec8a37d4-3286-45c4-b9c4-3f0d39f31fa8)



<p align="right">(<a href="#top">トップへ</a>)</p>


