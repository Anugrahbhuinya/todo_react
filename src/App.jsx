import { useContext, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'

function App() {
  
  const [list,setList] =useState([
    {id:1, todoData:"todo1",finished:false},        
    {id:2, todoData:"todo2",finished:true},        
  ]);

  return (
    <TodoContext.Provider value={{list,setList}}>
    <AddTodo updateList= {(todo) => setList([...list, { id:list.length + 1, todoData:todo, finished:false}])}/>
    <TodoList/>
    </TodoContext.Provider>
  )
}

export default App
