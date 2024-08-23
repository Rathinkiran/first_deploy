import { useState } from 'react'



function App() {
  const [todos, setTodos] = useState([{
    title : "go to gym",
    description : "go to gym from 5 to 9"
  },{
    title : "study DSA",
    description : "study DSA from 5 to 9"
  },{
    title : "study DSA",
    description : "study DSA from 5 to 9"
  },{
    title : "study DSA",
    description : "study DSA from 5 to 9"
  },{
    title : "study DSA",
    description : "study DSA from 5 to 9"
  }])
  function addTodo(){
    setTodos([...todos,{
      title:"new todo",
      description: "desc of new todo"
    }])
  }

  return (
    <>
    <button onClick={addTodo}>Add a random TODO</button>

    {todos.map((todo)=> {
      return <div>
        <Todo title = {todo.title} description ={todo.description}/>
      </div>

    })}
  
    
    
    
    </>
  )
}
function Todo(props){
  return <div>
     <h1>{props.title}</h1>
     <h2>{props.description}</h2>

  </div>
  
    
  
}

export default App


