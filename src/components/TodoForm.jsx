import React, {useState} from 'react'
import { useTodo } from '../contexts';
// import { useTodo } from '../../../todo-list-02/src/context'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo();

  const add = (e) => {
    e.preventDefault()
    
    if(!todo) return
    addTodo({todo,completed:false})
    setTodo("")
  }

  return (
    <form onSubmit={add} className='flex'>
      <input
       type="text"
       placeholder='Write your todo...'
       className='w-full border-black/10 rounded-l-lg outline-none px-3 duration-150 bg-white/20 py-1.5'
       value={todo}
       onChange={(e)=> setTodo(e.target.value)}

      />
      <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-500 text-white shrink-0'>
        Add
      </button>
    </form>
  )
}

export default TodoForm