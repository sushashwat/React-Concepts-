import { useState } from "react";
import Conditional from "./components/Conditional";
import TimerComponent from "./components/TimerComponent";
import EventHandling from "./components/EventHandling";
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

  function handleClick(){
    console.log(event);
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
    <EventHandling/>
    <button onClick={handleClick}> Push me </button>
    </>
  )
}

export default App;
