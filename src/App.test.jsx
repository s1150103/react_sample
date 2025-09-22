import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import App from './App'

// ローカルストレージのモック
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
globalThis.localStorage = localStorageMock

describe('App Component', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
  })

  it('renders TODO app title', () => {
    render(<App />)
    expect(screen.getByText('📝 React TODO アプリ')).toBeInTheDocument()
  })

  it('renders default todos', () => {
    localStorageMock.getItem.mockReturnValue(null)
    render(<App />)

    expect(screen.getByText('Reactの基礎を学ぶ')).toBeInTheDocument()
    expect(screen.getByText('TODOアプリを作る')).toBeInTheDocument()
    expect(screen.getByText('useStateを理解する')).toBeInTheDocument()
  })

  it('adds new todo when input is provided', () => {
    localStorageMock.getItem.mockReturnValue(null)
    render(<App />)

    const input = screen.getByPlaceholderText('新しいタスクを入力...')
    const addButton = screen.getByText('追加')

    fireEvent.change(input, { target: { value: 'テスト用タスク' } })
    fireEvent.click(addButton)

    expect(screen.getByText('テスト用タスク')).toBeInTheDocument()
  })

  it('toggles todo completion status', () => {
    localStorageMock.getItem.mockReturnValue(null)
    render(<App />)

    const checkbox = screen.getAllByRole('checkbox')[0]
    const initialChecked = checkbox.checked

    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(!initialChecked)
  })

  it('filters todos correctly', () => {
    localStorageMock.getItem.mockReturnValue(null)
    render(<App />)

    // 完了済みフィルターボタンを特定してクリック
    const completedButton = screen.getByRole('button', { name: /完了済み/ })
    fireEvent.click(completedButton)

    // 完了済みタスクのみ表示されるはず
    expect(screen.getByText('useStateを理解する')).toBeInTheDocument()
    expect(screen.queryByText('Reactの基礎を学ぶ')).not.toBeInTheDocument()
  })
})