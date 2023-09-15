import React from 'react'

const Form = ({input,setInput, todos, setTodos, isEdit, editTodo, setIsEdit}) => {

    const submitHandler = (e) =>{
        e.preventDefault();

        setTodos([...todos,{id:Math.random().toString(), item: input, completed: false}]);
        setInput("");
    }
    // console.log("todo li is", todos)

    const updateSubmitHandler = (e) => {
      e.preventDefault();

      setTodos(todos.map((todo) => {

        if(todo.id === editTodo){

          return {...todo, item: input}
          // console.log("id is same work.")
        }return todo;
        
      }))
      setInput("");
      setIsEdit(true);
      
    }

  return (
    <div className='container mt-4' style={{maxWidth: 600}}>
        {isEdit ?(
          <form className='form' onSubmit={submitHandler}>
          <input type="text" value={input} onChange = {(e)=>setInput(e.target.value)} className='form-control' required />
          <button type='submit' className="btn btn-primary mt-4">Add Item</button>
      </form>

        ) : (

          <form className='form' onSubmit={updateSubmitHandler}>
            <input type="text" value={input} onChange = {(e)=>setInput(e.target.value)} className='form-control' required />
            <button type='submit' className="btn btn-primary mt-4">Update Item</button>
        </form>

        )}
    </div>
  )
}

export default Form;