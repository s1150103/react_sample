# React 学習プラン（12月22日〜25日）

## 🎯 学習目標

**現在のTODOアプリを段階的に改善しながら、Reactの主要概念を実践的に学習する**

## 📅 3日間の学習スケジュール

### **Day 1（12/22）: 基本概念の理解・実装**

#### 🔧 コンポーネント分割（優先度: 高）
- [ ] `TodoItem`コンポーネント作成
- [ ] `TodoFilter`コンポーネント作成
- [ ] `TodoStats`コンポーネント作成
- [ ] `AddTodoForm`コンポーネント作成

**学習ポイント**: Props、コンポーネント設計、再利用性

#### 🔗 Props とデータフロー
- [ ] 親から子へのデータ受け渡し
- [ ] コールバック関数でのイベント処理
- [ ] propsのバリデーション（PropTypes）

#### 🎨 スタイリング改善
- [ ] CSS Modules または styled-components導入
- [ ] レスポンシブデザイン対応

---

### **Day 2（12/23）: 状態管理とライフサイクル**

#### ⚡ カスタムフック
- [ ] `useTodos`フック作成（TODO操作ロジック分離）
- [ ] `useLocalStorage`フック作成（汎用的なローカルストレージ）

#### 🔄 useReducer による状態管理
- [ ] TodoReducer実装
- [ ] 複雑な状態更新を管理

#### 📡 useEffect の活用
- [ ] データフェッチ
- [ ] クリーンアップ処理
- [ ] 依存配列の理解

#### 🌐 外部API連携
- [ ] JSONPlaceholder APIからダミーデータ取得
- [ ] ローディング状態の管理
- [ ] エラーハンドリング

---

### **Day 3（12/24）: 高度な機能とパフォーマンス**

#### 🚀 React Router
- [ ] ページ遷移機能追加
- [ ] `/`, `/completed`, `/active` ルート作成
- [ ] ナビゲーション実装

#### ⚡ パフォーマンス最適化
- [ ] `useMemo`でフィルタリング最適化
- [ ] `useCallback`でコールバック最適化
- [ ] `React.memo`でコンポーネント最適化

#### 📱 追加機能
- [ ] ドラッグ&ドロップでタスク並び替え
- [ ] カテゴリ機能
- [ ] 検索機能
- [ ] ダークモード

#### 🧪 テスト拡充
- [ ] コンポーネント単位のテスト追加
- [ ] インテグレーションテスト

---

### **予備日（12/25）: 総合演習**

#### 🎁 発展課題（興味に応じて選択）
- [ ] TypeScript導入
- [ ] Context API でグローバル状態管理
- [ ] アニメーション（Framer Motion）
- [ ] PWA対応
- [ ] Docker化

---

## 📚 各日の学習リソース

### **基本概念**
- [React公式ドキュメント - コンポーネントとProps](https://react.dev/learn/passing-props-to-a-component)
- [Thinking in React](https://react.dev/learn/thinking-in-react)

### **フック**
- [フックの導入](https://react.dev/reference/react)
- [カスタムフック](https://react.dev/learn/reusing-logic-with-custom-hooks)

### **パフォーマンス**
- [React.memo](https://react.dev/reference/react/memo)
- [useMemo](https://react.dev/reference/react/useMemo)
- [useCallback](https://react.dev/reference/react/useCallback)

## 🎯 学習の進め方

### **実践主体**
1. **理論 20% : 実装 80%** の比率
2. **小さな変更から始める**
3. **毎回pushしてCI/CD確認**

### **学習サイクル**
```
概念理解 → 実装 → テスト → git push → 振り返り
```

### **質問・調査のポイント**
- なぜこの書き方をするのか？
- 他にどんな方法があるのか？
- パフォーマンスへの影響は？

## 📝 成果物

### **最終的に完成するアプリ**
- モダンなReactパターンを使用したTODOアプリ
- コンポーネントベースの設計
- カスタムフックによる再利用可能なロジック
- ルーティング機能
- レスポンシブデザイン
- 包括的なテストカバレッジ

### **習得する技術**
- ✅ コンポーネント設計
- ✅ Props とイベントハンドリング
- ✅ フック（useState, useEffect, useReducer, カスタムフック）
- ✅ 状態管理パターン
- ✅ パフォーマンス最適化
- ✅ ルーティング
- ✅ テスト駆動開発

---

**頑張って25日までに実践的なReact力を身につけましょう！** 🚀