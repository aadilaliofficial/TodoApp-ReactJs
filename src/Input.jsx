import React, { useRef } from 'react'

export default function Input(props) {

  const inputRef = useRef()
  function addTaskHandler(){
    props.addItem(inputRef.current.value);
    inputRef.current.value=""
  }

  return (
        <div className="input-group mb-3">
            <input ref={inputRef} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span onClick={addTaskHandler} className="input-group-text" id="basic-addon2" style={{cursor: 'pointer'}}>add</span>
        </div>
  )
}
