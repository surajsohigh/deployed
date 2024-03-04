import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")
    const [editText, setEditText] = useState({ id: null, text: "" })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setTodo([...todo, {id: Date.now(), text:input}])
      setInput("")
    }
  
    const deleteTodo = (id) => {
      console.log(id)
      setTodo(todo.filter((todoItem) => todoItem.id !== id));
    }
  
    const updateTodo = (id) => {
        
    }
  
  return (
    <>
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)}
        className='border-2 border-black'></input>
        <button className='ml-3' type="submit" >Add</button>
      </form>

      <ul>
        {
          todo.map( (e) => {
            return (
              <li key={e.id} className=''>
                {
                  editText.id === e.id ? 
                  (<>
                  
                  </>) : 
                  (<div className='gap-4'>
                    <span>{e.text}</span>
                    <button onClick={() => deleteTodo(e.id)}>Delete</button>
                    <button onClick={() => updateTodo(e.id)}>Update</button>
                  </div>)
                }



            </li>

            )
          } )
        }
      </ul>
    </div>
    </>
  )
}

export default Todo