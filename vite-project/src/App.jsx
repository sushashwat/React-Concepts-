import { useState } from "react";
import Conditional from "./components/Conditional";
import TimerComponent from "./components/TimerComponent";
import EventHandling from "./components/EventHandling";
import Form from "./components/Form";
import Class from "./components/Class";
import Counterr from "./components/Counterr";
import SideEffect from "./components/SideEffect";
import Memo from "./components/Memo";
import UseMemo from "./components/Usememo";
import UseCallback from "./components/UseCallback";
import UseRef from "./components/UseRef";
function App(){

  const [count,setCount] = useState(0);
  const[text , setText] = useState("");
  console.log("Rendering");
  const todos = [
    {id:1, text:"learn react"},
    {id:2, text:"revise react"},
    {id:3, text:"sharp dsa"}
  ];

  function increase (){
    setCount(count + 1);
  }

  function handleClick(e){
    console.log(event);
    console.log(e);
  }
  function handleChange(e){
    console.log("Typing", e.target.value);
    setText(e.target.value);
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
    {/* <TimerComponent/> */}
    <EventHandling/>
    <button onClick={handleClick}> Push me </button>
    <input 
    type = "text"
    onChange={handleChange}
    />
    <h1>{text}</h1>
    <Form/>
    <Class/>
    <Counterr/>
    <SideEffect/>
    <Memo/>
    <UseMemo/>
    <UseCallback/>
    <UseRef />
    </>
  )
}

export default App;
