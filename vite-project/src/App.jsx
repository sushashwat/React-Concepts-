import { useState } from "react";
import Conditional from "./components/Conditional";
import TimerComponent from "./components/TimerComponent";
function App(){

  const [count,setCount] = useState(0);
  const todos = [
    {id:1, text:"learn react"},
    {id:2, text:"revise react"},
    {id:3, text:"sharp dsa"}
  ];

  function increase (){
    setCount(count + 1);
  }

  return(
    <>
    <h1>
      shashwat 
    </h1>
    <h1>
      <Conditional/>
    </h1>
    <h2>{count}</h2>
    <button onClick={increase}> increase</button>
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    <TimerComponent/>
    </>
  )
}

export default App;
