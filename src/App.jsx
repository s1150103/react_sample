/*
 ============================================
 React学習環境のメインコンポーネント
 ============================================

 このファイルの役割:
 - Reactアプリケーションの中心となるコンポーネント
 - ユーザーが見る画面の内容をすべて定義
 - 状態（データ）の管理と画面表示を担当
*/

// ===== 必要な機能をインポート（読み込み）=====

// useState: Reactの「状態管理」機能
// 状態とは「変化するデータ」のこと（例：カウンターの数値、入力されたテキスト）
import { useState } from 'react'

// 画像ファイルをインポート
// これにより、JSX内で画像を表示できる
import reactLogo from './assets/react.svg' // Reactのロゴ画像
import viteLogo from '/vite.svg' // Viteのロゴ画像

// CSSファイルをインポート
// これにより、見た目（デザイン）が適用される
import './App.css'

// ===== メインコンポーネントの定義 =====
// 「function App()」でコンポーネントを作成
// コンポーネント = 画面の一部分（または全体）を担当する部品
function App() {

  // ===== 状態（State）の定義 =====
  // 状態とは「時間とともに変化するデータ」のこと
  // useState()を使って状態を作成する

  /*
   useState の使い方:
   const [現在の値, 値を変更する関数] = useState(初期値)

   例: const [count, setCount] = useState(0)
   - count: 現在のカウンター値（最初は0）
   - setCount: カウンター値を変更するための関数
   - useState(0): 初期値を0に設定
  */

  // 1. カウンターの値を管理する状態
  // ボタンを押すたびに数が増える
  const [count, setCount] = useState(0)

  // 2. ユーザーが入力したテキストを管理する状態
  // 入力フィールドに打った文字がここに保存される
  const [message, setMessage] = useState('')

  // 3. 学習項目のリストを管理する状態
  // 配列（複数の項目をまとめたもの）を初期値として設定
  const [items, setItems] = useState(['学習項目1', '学習項目2'])

  // ===== JSX（画面の内容）を返す =====
  // JSXとは: HTMLに似た書き方でReactの画面を作る記法
  // return() の中に書いたものがブラウザに表示される
  return (
    /*
     <> と </> について:
     - これは「フラグメント」と呼ばれる
     - 複数のHTML要素をまとめるために使用
     - 実際のHTMLには影響しない（余計なdivタグを作らない）
    */
    <>
      {/*
        コメントの書き方:
        JSX内では {/* コメント */} の形で書く
        通常のHTMLの <!-- --> とは違うので注意
      */}

      {/* ===== ロゴ表示エリア ===== */}
      <div>
        {/*
          aタグ: リンクを作成
          href: リンク先のURL
          target="_blank": 新しいタブで開く
        */}
        <a href="https://vite.dev" target="_blank">
          {/*
            imgタグ: 画像を表示
            src={viteLogo}: 画像のファイル（{}でJavaScriptの変数を使用）
            className: CSSのクラス名（HTMLのclassと同じ意味）
            alt: 画像が表示されない時の代替テキスト
          */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* ===== メインタイトル ===== */}
      {/* h1タグ: 一番大きな見出し */}
      <h1>Vite + React 学習環境</h1>

      {/* ===== カウンターセクション ===== */}
      <div className="card">
        {/*
          buttonタグ: クリックできるボタン
          onClick: ボタンがクリックされた時に実行される処理
          () => setCount((count) => count + 1):
            - これは「アロー関数」という書き方
            - ボタンを押すとsetCount関数が実行される
            - setCount((count) => count + 1):
              現在のcount値に1を足した値を新しいcountとして設定
        */}
        <button onClick={() => setCount((count) => count + 1)}>
          {/*
            {count}: JavaScriptの変数をJSX内で表示
            {}の中にはJavaScriptのコードが書ける
          */}
          カウント: {count}
        </button>
        {/*
          pタグ: 段落（文章）
          codeタグ: コードを表すテキスト（等幅フォントで表示される）
        */}
        <p>
          <code>src/App.jsx</code> を編集して保存すると即座に反映されます
        </p>
      </div>

      {/* ===== 入力フィールドのセクション ===== */}
      <div className="card">
        {/* h2タグ: 2番目に大きな見出し */}
        <h2>メッセージ入力</h2>

        {/*
          inputタグ: テキスト入力フィールド
          これがReactの「制御されたコンポーネント」の例
        */}
        <input
          type="text"  {/* 入力タイプを「テキスト」に指定 */}

          {/*
            value={message}:
            - 入力フィールドの値をmessage状態と同期
            - これにより、message状態が変わると入力フィールドも更新される
          */}
          value={message}

          {/*
            onChange={(e) => setMessage(e.target.value)}:
            - ユーザーが文字を入力する度に実行される
            - e: イベントオブジェクト（入力に関する情報が入っている）
            - e.target.value: 現在入力フィールドに入っている文字列
            - setMessage(): message状態を新しい値に更新

            この仕組みにより「入力→状態更新→画面更新」が自動で行われる
          */}
          onChange={(e) => setMessage(e.target.value)}

          {/* placeholder: 入力欄が空の時に表示されるヒントテキスト */}
          placeholder="何か入力してください"

          {/*
            style: インラインスタイル（直接CSSを指定）
            {{}}の二重括弧:
            - 外側の{}: JSX内でJavaScriptを書くため
            - 内側の{}: JavaScriptのオブジェクトを表すため
          */}
          style={{padding: '8px', fontSize: '16px', marginRight: '8px'}}
        />

        {/* リアルタイムで入力内容を表示 */}
        <p>入力内容: {message}</p>
      </div>

      {/* ===== リスト表示のセクション ===== */}
      <div className="card">
        <h2>学習リスト</h2>

        {/* ulタグ: 順序なしリスト（番号なしの箇条書き） */}
        <ul>
          {/*
            配列をリスト表示する方法:

            items.map((item, index) => (...))

            これは「map関数」を使った配列の処理
            - items: ['学習項目1', '学習項目2'] という配列
            - map(): 配列の各要素に対して同じ処理を実行
            - (item, index):
              - item: 配列の各要素（'学習項目1', '学習項目2'）
              - index: 配列のインデックス番号（0, 1, 2...）

            結果: 配列の要素数だけ<li>タグが作成される
          */}
          {items.map((item, index) => (
            /*
              liタグ: リストの項目
              key={index}: Reactが各要素を識別するための固有の値
              （Reactが効率的に画面を更新するために必要）
            */
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* ===== フッター情報 ===== */}
      <p className="read-the-docs">
        ViteとReactのロゴをクリックして詳しく学びましょう
      </p>
    </> {/* フラグメントの終了タグ */}
  ) /* return文の終了 */
} /* App関数の終了 */

// ===== コンポーネントのエクスポート =====
/*
 export default App:
 - このApp関数を他のファイルから使えるようにする
 - main.jsxファイルがこのAppコンポーネントを読み込んで表示
 - 「default」は「このファイルのメインの機能」という意味
*/
export default App

/*
 ============================================
 このファイルで学べるReactの基本概念:
 ============================================

 1. コンポーネント: function App() { ... }
    - 画面の部品を作る仕組み

 2. 状態管理: useState()
    - データの変化を管理する仕組み

 3. イベント処理: onClick, onChange
    - ユーザーの操作に反応する仕組み

 4. 条件付きレンダリング: {変数}
    - データに応じて表示を変える仕組み

 5. リストレンダリング: map()
    - 配列データを一覧表示する仕組み

 これらがReactの核となる機能です！
*/
