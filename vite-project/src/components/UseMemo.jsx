import { useState } from "react"

function UseMemo (){
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);

    function handleInp(e){
        setInp(e.target.value)
    }
    
    let sum = 0; 
    for(let i=1; i<=inp; i++){
        sum+=i;
    }

    return(
        <div>
            <input onChange={handleInp} type="text" />
            <h1>Sum:{sum} </h1>
            <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        </div>

    )

}

export default UseMemo