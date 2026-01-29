import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,DeleteTodo } from '../../store/slice/TodoSlice';
function Todo_list() {
  const [currentTodo,setCurrentTodo] = useState("");
  const[TodoList,setTodoList] = useState([])
  
  console.log(currentTodo)
  
  const dispatch = useDispatch()

  const {todoList} = useSelector(state =>state.todo)

 
  function handleAddTodo(){
  dispatch(addTodo(currentTodo))
  setCurrentTodo('')
  }
  
function handleDelete(tododelitem){
dispatch(DeleteTodo(tododelitem))
}
function handleUpdateTodo(todoItem){

}

  return (
    <div>
      <input type='text' 
      name='todo' 
      placeholder='Enter your todo' 
      value={currentTodo}
       onChange={(event)=>setCurrentTodo(event.target.value) }
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
      { todoList &&
        todoList.length > 0 ? todoList.map((todoitem)=>(
          <li key={todoitem.id}  >
            <p>{todoitem.title}</p>
             <button onClick={()=>handleDelete(todoitem.id)} >Delete</button>
             <button>Update</button>
            </li>
        ))  : 'null'
     
      }

      </ul>
    </div>
  )
}

export default Todo_list
