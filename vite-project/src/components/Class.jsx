import React from "react";
import Counter from "./Counter";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }

    componentDidMount(){
        console.log("hello triggered")
    }

    decrement(){
        this.setState({count: this.state.count-1})
    }
    increment(){
        this.setState({count: this.state.count+1})
    }
    render(){
        return(
            <div>
                <button onClick={this.decrement.bind(this)}>-</button>
                <h1>{this.state.count}</h1>
                <Counter count = {this.state.count}/>
               <button onClick={this.increment.bind(this)}>+</button>


            </div>
        )
    }
}

export default App;
