import { useState,memo, useCallback } from "react";

function UseCallback (){

    const [count, setCount] = useState(0);
    // let b = 100;
    let b = useCallback(function(){console.log("hi")}, [])
    return (
        <div>
            <Chotu data = {b}/>
            <button onClick={()=> setCount(count+1)}>Click {count}</button>
        </div>
    )
}

const Chotu = memo(function Chotu ({data}){
    return (
        <h1>Hello - {data}</h1>
    )
}
)

export default UseCallback;
