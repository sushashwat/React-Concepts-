import { memo, useState } from "react";


function Memo ({naam}){

    const [user,setUser] = useState(naam);
    function handleUser(){
        setUser(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <Chotu data={user}/>
            <h1>hello from memo</h1>
            <button onClick={handleUser}>Change Me</button>
            <Chotu data="sing"/>
            <Chotu data="shashwat"/>
        </div>
    )
}


const Chotu = memo(function Chotu ({data}){
    return(
        <div>
            <h1>Hello from : {data}</h1>
        </div>
    )
})


export default Memo;
