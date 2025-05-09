interface TodoListProps {
  children: React.ReactNode
}

export function TodoList({ children }: TodoListProps) {
  return (
    <ul className="space-y-4" role="list">
      {children}
    </ul>
  )
} 