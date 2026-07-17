import { use, useState } from "react";

function Form(){

    const [name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[pass, setPass]  = useState("");
    

    function handleSubmit(e){
        e.preventDefault();   // prevents reloading the page 
        console.log(name);
        setName("");
    }

    function handleClick(e){
        console.log("clicked")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleClick}>Submit</button>
            </form>
        </>
    );
}

export default Form;

