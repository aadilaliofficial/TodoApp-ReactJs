import React from 'react'

export default function Display(props) {
  return (
    <ul class="list-group">
      {
        props.Todo.map((item , i) => {
          return(
                <li key={i} className="list-group-item my-1 d-flex justify-content-between align-items-center">
                {item}
                <span onClick={()=>{
                  props.removeHandler(i)
                }} className="badge text-bg-primary rounded-pill" style={{cursor: 'pointer'}}>Delete</span>
                </li>
          )
        })
      }
    </ul>
  )
}
