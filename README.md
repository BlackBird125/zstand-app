# Zustand User Authentication Demo

このプロジェクトは、Zustand を使用してグローバル状態（ユーザー情報）を管理し、ページ間で共有する方法を学ぶためのデモアプリケーションです。

## 機能

- ユーザー名によるシンプルな認証
- グローバル状態管理（Zustand）
- 保護されたルーティング
- モダンな UI（Material-UI）

## 技術スタック

- React 18
- TypeScript
- Zustand（状態管理）
- React Router v6（ルーティング）
- Material-UI（UI コンポーネント）

## プロジェクト構造

```
src/
├── stores/
│   └── useUserStore.ts    # Zustandストア
├── pages/
│   ├── LoginPage.tsx      # ログインページ
│   └── HomePage.tsx       # ホームページ
└── App.tsx               # メインアプリケーション
```

## セットアップ

1. リポジトリのクローン:

```bash
git clone https://github.com/BlackBird125/zstand-app.git
cd zstand-app
```

2. 依存関係のインストール:

```bash
npm install
```

3. 開発サーバーの起動:

```bash
npm start
```

アプリケーションは http://localhost:3000 で起動します。

## 実装の詳細

### 状態管理（Zustand）

`useUserStore.ts` でユーザー状態を管理しています：

```typescript
type UserState = {
  username: string;
  setUsername: (name: string) => void;
  reset: () => void;
};
```

### ページ構成

1. **LoginPage.tsx**

   - ユーザー名入力フォーム
   - ログインボタン
   - 入力値のバリデーション

2. **HomePage.tsx**
   - ユーザー名の表示
   - ログアウト機能

### ルーティング

- `/login` - ログインページ
- `/home` - ホームページ（要認証）
- `/` - ログインページにリダイレクト

## ライセンス

MIT
