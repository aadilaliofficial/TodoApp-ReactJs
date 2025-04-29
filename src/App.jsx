import React, { useState } from 'react'
import Input from './input'
import Display from './Display'

export default function App() {
  const [Todo, SetTodo] = useState([]);
  
  function addItem(data){
    SetTodo([...Todo, data])
  }

  function removeHandler(i){
    const newData = Todo.filter((d, index) => {
      return i != index ? true : false
    })
    SetTodo(newData);
  }

  return (
    <div className='my-container'>
      <Input addItem={addItem} />
      <Display removeHandler={removeHandler} Todo={Todo} />
    </div>
  )
}
