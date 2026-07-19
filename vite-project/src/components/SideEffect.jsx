import { useEffect, useState } from "react";

function SideEffect (){
     
    const[todos,setTodos] = useState([]);
    useEffect(()=>{
        const API = "https://jsonplaceholder.typicode.com/todos/1"
    fetch(API) // returns a promise
    .then((resp)=>{
        return resp.json()
    }) 
    .then((data)=>{
        console.log(data)
        setTodos([data]) // Modified: Wrapped 'data' in an array so .map() works, and saved it to state
    })
    .catch((err)=>console.log(err))
    }, []) // Modified: Added empty dependency array to stop the infinite rendering loop
    return (
        <div>
            <h1>sideeffects</h1>
            {todos.map((item)=>{
                    return(
                        <div key={item.id}> {/* Modified: Added required unique key prop */}
                            <h1>ID:{item.id} </h1>
                            <h1>TITLE:{item.title}</h1>
                            <h1>COMPLETED:{item.completed.toString()}</h1> {/* Modified: Converted boolean to string so it displays */}
                        </div>
                    )
                })
            }
        </div>
    );
}
    
export default SideEffect;