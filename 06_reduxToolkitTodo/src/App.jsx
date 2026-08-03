import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
     <h1 className="text-center text-3xl font-bold text-white mt-8">
       Learn about Redux Toolkit
     </h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
