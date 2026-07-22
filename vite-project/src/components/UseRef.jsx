import { useRef } from "react";

function UseRef(){
    const inputRef = useRef(null);


    const countRef = useRef(null);

     
    function handleClick(){
        inputRef.current.focus();
    }

    function handleCount(){
        countRef.current++;
        console.log(countRef.current);
    }
    
    return(
        <>
        <input ref={inputRef}/>
        <button onClick={handleClick}> click </button>
        <h1>{countRef.current}</h1>
        <button onClick={handleCount}>
            increase
        </button>
        </>
    );
}


export default UseRef;