import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] =useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefult();

   editTodo(value, task.id)

  }
  return(
    <form onSubmit={handleSubmit}  className='TodoForm'> 
    <input type="text" className='todo-input' value={value} placeholder='Update Task' onChange={(e)=> setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )  
}