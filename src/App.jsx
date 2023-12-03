import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import ContactUs from './components/ContactUs';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  useEffect(() => {

    const todos = JSON.parse(localStorage.getItem("todos"))


    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (

    <>

      <Navbar />

      <Routes>
        <Route path='' Component={Home}></Route>
        <Route path='home' Component={Home}></Route>
        <Route path='about' Component={About}></Route>
        <Route path='contactus' Component={ContactUs}></Route>
      </Routes>

    </>




  )
}

export default App


