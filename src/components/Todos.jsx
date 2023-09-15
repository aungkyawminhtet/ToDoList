import React from 'react'

const Todos = ({todos, setTodos, setEditTodo, setInput, setIsEdit, check, setCheck}) => {

    const Delete = (id) =>{
        setTodos(todos.filter((todo)=> todo.id != id))
    }

    const CheckDel = (id) => {
        setCheck(check.filter((item) => item.id != id));
    }

    const Checking = (checked) =>{

        setCheck([...check,{id: checked.id, item: checked.item}]);

        setTodos(todos.filter((todo)=> todo.id != checked.id))
        
    }

    const Edit = (todo) =>{
        setIsEdit(false);

        setEditTodo(todo.id);
        setInput(todo.item);        
    }

  return (

    <div className='container mt-3' style={{ maxWidth: 600 }}>
        <ul className='list-group'>
            {todos.map((todo) => {
                return <li className='list-group-item' key = {todo.id}>
                    {todo.item}
                    <a href="#" onClick={()=>Delete(todo.id)}><i className='fas fa-trash text-danger float-end'></i></a>
                    <a href="#" onClick={()=>Checking(todo)}><i className='fas fa-check me-4 float-end'></i></a>
                    <a href="#" onClick={()=>Edit(todo)}><i className='fas fa-edit me-4 float-end'></i></a>
                </li>
            })}
        </ul>
        <hr />
        <ul className="list-group">
            {check.map((item)=>{
                return <li className='list-group-item opacity-50' key = {item.id}>{item.item}
                <a href="#" onClick={()=>CheckDel(item.id)}><i className='fas fa-trash text-danger float-end'></i></a>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Todos        