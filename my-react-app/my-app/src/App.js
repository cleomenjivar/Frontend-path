import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos]= useState ([])
  //We put the object to have them as default "Todo 1","Todo2"
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
      if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    
      if (name === '') return
      setTodos(prevTodos => {

      return [...prevTodos, { id: uuidv4, name: name, complete: false}]
      })
      todoNameRef.current.ref = null
  }

  function handleClearTodos() {
    const newTodos = todo.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo} > Add Todo </button>
      <button onClick={handleClearTodos} > Clear Done Todos </button>
      <div>{todos.filter(todo => !todo.complete).length} left to do </div>
    </>
  )
}

export default App;
