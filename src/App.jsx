// React学習環境のメインコンポーネント
import { useState } from 'react' // React Hooksの状態管理機能をインポート
import reactLogo from './assets/react.svg' // Reactロゴ画像
import viteLogo from '/vite.svg' // Viteロゴ画像
import './App.css' // スタイルシートをインポート

function App() {
  // 状態管理: カウンターの値を管理
  const [count, setCount] = useState(0)

  // 状態管理: ユーザーが入力したメッセージを管理
  const [message, setMessage] = useState('')

  // 状態管理: 学習項目のリストを管理
  const [items, setItems] = useState(['学習項目1', '学習項目2'])

  // JSXを返す: ブラウザに表示されるUI要素
  return (
    <>
      {/* ロゴ表示エリア */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* メインタイトル */}
      <h1>Vite + React 学習環境</h1>

      {/* カウンターセクション */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          カウント: {count}
        </button>
        <p>
          <code>src/App.jsx</code> を編集して保存すると即座に反映されます
        </p>
      </div>

      {/* 入力フィールドのセクション */}
      <div className="card">
        <h2>メッセージ入力</h2>
        <input
          type="text"
          value={message} // 現在の入力値
          onChange={(e) => setMessage(e.target.value)} // 入力時に状態を更新
          placeholder="何か入力してください"
          style={{padding: '8px', fontSize: '16px', marginRight: '8px'}}
        />
        <p>入力内容: {message}</p>
      </div>

      {/* リスト表示のセクション */}
      <div className="card">
        <h2>学習リスト</h2>
        <ul>
          {/* 配列をマップして各項目をリスト要素として表示 */}
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="read-the-docs">
        ViteとReactのロゴをクリックして詳しく学びましょう
      </p>
    </>
  )
}

export default App
