import React, { ChangeEvent } from 'react'
import './App.css'
import TodoComponent from './components/Todo'
import { Todo } from './types'

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([])
  const [filteredTodos, setFilteredTodos] = React.useState<Todo[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<null | string>(null)
  const [users, setUsers] = React.useState<number[]>([])
  const [selectedUser, setSelectedUser] = React.useState<number | null>(null)


  async function fetchTodos() {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      if (!response.ok) {
        throw Error(`There was a problem: ${response.status}, ${response.statusText}`)
      }
      const data: Todo[] = await response.json()

      // Populate the data for the option set
      const users = new Set<number>()
      data.forEach(todo => users.add(todo.userId))
      setUsers([...users])

      setTodos(data)
      setFilteredTodos(data)
      setLoading(false)

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
        setLoading(false)
      }
    }
  }

  React.useEffect(() => {
    fetchTodos();
  }, [])


  React.useEffect(() => {
    if (!selectedUser) return
    setFilteredTodos(todos.filter(todo => todo.userId === selectedUser))
  }, [selectedUser])

  function toogleCompleted(id: number) {
    const targetIndex = filteredTodos.findIndex(todo => todo.id === id)
    if (targetIndex === -1) return
    const newState = structuredClone(filteredTodos);
    newState[targetIndex] = {
      ...newState[targetIndex],
      completed: !newState[targetIndex].completed
    }
    setFilteredTodos(newState)
  }

  function handleChange(e) {
    setSelectedUser(parseInt(e.target.value))
    // optimistic update
  }
  return (
    <>
      <h1>Our Cool ToDo App</h1>
      <select onChange={handleChange}>
        {users.map(user => <option value={user} key={user}>User {user}</option>)}
      </select>
      {loading && <p>Loading ... </p>}
      {error && <p className="error">{error}</p>}
      {filteredTodos.map(todo => <TodoComponent todo={todo} key={todo.id} toogleCompleted={toogleCompleted} ></TodoComponent>)}
    </>
  )
}

export default App
