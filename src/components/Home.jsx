import { useEffect, useState } from 'react'
import { TodoProvider } from '../context/TodoContext';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { Route,Router,Routes } from 'react-router-dom';


function Home() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  useEffect(() => {

      const todos = JSON.parse(localStorage.getItem("todos"))
    
    
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      {/* <Navbar/> */}

      <div className="bg-[#060d11] min-h-screen py-2 font-sans z-10">
        <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-3 text-[#fefcfb]">
          <h1 className="text-2xl font-bold text-center mb-8 mt-4 text-orange-600">Manage Tasks</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map(todo => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      

    </TodoProvider>
  )
}

export default Home