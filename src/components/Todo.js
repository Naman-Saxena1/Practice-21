import React from "react";

function Todo({text,todo,todos,setTodos})
{
    function deleteHandler()
    {
        setTodos(todos.filter(el=>el.id!==todo.id))
    }

    function completeHandler()
    {
        setTodos(todos.map(el=>{
            if(el.id===todo.id)
            {
                return {...el,completed: !el.completed}
            }
            return el;
        }))
    }

    function onInputValueChangeHandler(e)
    {
        setTodos(todos.map(el=>{
            if(el.id===todo.id)
            {
                return {...el,text: e.target.value}
            }
            return el;
        }))
    }

    return(
        <div className="todo">
            <input value={text} onChange={onInputValueChangeHandler} className={`todo-item ${todo.completed?"completed":""}`}></input>
            
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>

            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;