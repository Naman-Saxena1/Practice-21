import React, {useState,useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const [inputText,setInputText] = useState("")
  const [todos,setTodos] = useState([])
  const [status,setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[])

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status])

  function filterHandler()
  {
    switch(status)
    {
      case 'completed' : 
        setFilteredTodos(todos.filter(todo=> todo.completed===true))
        break;
      case 'uncompleted' : 
        setFilteredTodos(todos.filter(todo=> todo.completed===false))
        break;
      default :
        setFilteredTodos(todos)
        break;
    }
  }

  function saveLocalTodos()                     //Updating data in local storage in each re-render
  {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  function getLocalTodos()
  {
    if(localStorage.getItem('todos')===null)    //When we open site for 1st site, setting empty array
    {
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else                                        //Retrieving data from Local storage after Refresh to render it
    {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List App</h1>
        <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </header>
    </div>
  );
}

export default App;