import React, { useState } from 'react'

function AddTodo({updateList}) {
    const [inputText,setInputText]= useState('')
  return (
    <div>
      <input 
      value={inputText}
      type="text" placeholder='Add your todo...'
      onChange={e => setInputText(e.target.value)} />
      <button onClick={()=> {
        updateList(inputText);
        setInputText('')}

      }>Add</button>
    </div>
  )
}

export default AddTodo
