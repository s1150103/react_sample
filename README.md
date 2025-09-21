# React学習環境 🚀

このプロジェクトは、Reactの基礎を学ぶための学習環境です。

## 📚 このプロジェクトで学べること

### 1. React の基本概念
- **コンポーネント**: 画面の部品を作る仕組み
- **状態管理 (State)**: データの変化を管理する仕組み
- **イベント処理**: ユーザーの操作に反応する仕組み

### 2. 実装されている機能
- ✅ **カウンター機能**: ボタンクリックで数値が増加
- ✅ **入力フィールド**: リアルタイムでテキスト表示
- ✅ **リスト表示**: 配列データの一覧表示
- ✅ **詳細なコメント**: 初学者向けの丁寧な解説

## 🛠️ 使用技術
- **React 18**: フロントエンドライブラリ
- **Vite**: 高速な開発環境
- **JavaScript**: プログラミング言語
- **CSS**: スタイリング

## 🚀 開始方法

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバーの起動
```bash
npm run dev
```

### 3. ブラウザでアクセス
http://localhost:5173/ にアクセスしてアプリケーションを確認

## 📁 ファイル構造

```
src/
├── App.jsx          # メインコンポーネント（学習の中心）
├── App.css          # スタイルシート
├── main.jsx         # アプリケーションのエントリーポイント
└── assets/          # 画像ファイル
```

## 📖 学習の進め方

### Step 1: コードを読む
`src/App.jsx` を開いて、詳細なコメントを読みながらコードの動作を理解しましょう。

### Step 2: 小さな変更を試す
- ボタンのテキストを変更
- 新しい状態を追加
- スタイルの調整

### Step 3: 新機能を追加
- 新しいコンポーネントの作成
- より複雑な状態管理
- APIとの連携

## 🎯 主要な学習ポイント

### useState フック
```jsx
// 状態の定義
const [count, setCount] = useState(0)

// 状態の更新
setCount(count + 1)
```

### イベント処理
```jsx
// ボタンクリック
<button onClick={() => setCount(count + 1)}>

// 入力変更
<input onChange={(e) => setMessage(e.target.value)} />
```

### 配列の表示
```jsx
// リストレンダリング
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

## 🔧 利用可能なコマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# ビルド結果をプレビュー
npm run preview

# ESLintでコードチェック
npm run lint
```

## 📝 参考リンク

- [React公式ドキュメント](https://react.dev/)
- [Vite公式ドキュメント](https://vite.dev/)
- [JavaScript MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript)

## 🎉 次のステップ

1. **TypeScript**: より安全なコード記述
2. **React Router**: ページ遷移の実装
3. **状態管理ライブラリ**: Redux、Zustand など
4. **UI ライブラリ**: Material-UI、Chakra UI など
5. **テスト**: Jest、React Testing Library

---

Happy Coding! 💻✨