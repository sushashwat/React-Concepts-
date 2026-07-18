import { useState } from "react";


function SideEffect (){
     
    const[todos,setTodos] = useState([]);
    const API = "https://jsonplaceholder.typicode.com/todos/1"
    fetch(API) // returns a promise
    .then((resp)=>{
        return resp.json()
    }) 
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
    return (
        <div>
            <h1>sideeffects</h1>
            {
                todos.map((item,index)=>{
                    return(
                        <div>
                            <h1>{item.id} </h1>
                            <h1>{item.title}</h1>
                            <h1>{item.completed}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
}
    
export default SideEffect;
