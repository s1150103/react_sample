import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // TODOアプリの状態管理
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactの基礎を学ぶ', completed: false },
    { id: 2, text: 'TODOアプリを作る', completed: false },
    { id: 3, text: 'useStateを理解する', completed: true }
  ])

  const [inputText, setInputText] = useState('')
  const [filter, setFilter] = useState('all')

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>📝 React TODO アプリ</h1>

      {/* TODO入力セクション */}
      <div className="card">
        <h2>新しいタスクを追加</h2>
        <div style={{display: 'flex', gap: '8px', marginBottom: '16px'}}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="新しいタスクを入力..."
            style={{flex: 1, padding: '8px', fontSize: '16px'}}
          />
          <button
            onClick={() => {
              console.log('タスク追加:', inputText)
            }}
            style={{padding: '8px 16px', fontSize: '16px'}}
          >
            追加
          </button>
        </div>
        <p>入力中のタスク: {inputText}</p>
      </div>

      {/* TODOリスト表示セクション */}
      <div className="card">
        <h2>📋 タスク一覧</h2>

        {/* フィルターボタン */}
        <div style={{marginBottom: '16px', display: 'flex', gap: '8px'}}>
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '4px 12px',
              backgroundColor: filter === 'all' ? '#007bff' : '#f0f0f0',
              color: filter === 'all' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            全て ({todos.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            style={{
              padding: '4px 12px',
              backgroundColor: filter === 'active' ? '#007bff' : '#f0f0f0',
              color: filter === 'active' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            未完了 ({todos.filter(todo => !todo.completed).length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            style={{
              padding: '4px 12px',
              backgroundColor: filter === 'completed' ? '#007bff' : '#f0f0f0',
              color: filter === 'completed' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            完了済み ({todos.filter(todo => todo.completed).length})
          </button>
        </div>

        {/* TODOタスクのリスト */}
        <ul style={{listStyle: 'none', padding: 0}}>
          {todos
            .filter(todo => {
              if (filter === 'active') return !todo.completed
              if (filter === 'completed') return todo.completed
              return true
            })
            .map(todo => (
              <li
                key={todo.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                  margin: '4px 0',
                  backgroundColor: todo.completed ? '#f0f8f0' : '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    console.log('完了切り替え:', todo.id)
                  }}
                  style={{marginRight: '8px'}}
                />
                <span
                  style={{
                    flex: 1,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#666' : '#000'
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => {
                    console.log('削除:', todo.id)
                  }}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    fontSize: '12px'
                  }}
                >
                  削除
                </button>
              </li>
            ))}
        </ul>

        {/* 統計情報 */}
        <div style={{marginTop: '16px', fontSize: '14px', color: '#666'}}>
          <p>
            総タスク数: {todos.length} |
            未完了: {todos.filter(todo => !todo.completed).length} |
            完了済み: {todos.filter(todo => todo.completed).length}
          </p>
        </div>
      </div>

      <p className="read-the-docs">
        ブラウザの開発者ツール（F12）でコンソールを開いて、ボタンをクリックしてみましょう
      </p>
    </>
  )
}

export default App