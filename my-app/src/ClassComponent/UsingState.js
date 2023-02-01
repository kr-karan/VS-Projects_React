import { Component } from "react";

class UsingState extends Component{
    constructor(){
        super()
        {
            this.state = {
                message:"this is a method"
            }
        }
    }
    changeText(){
        this.setState({
            message:"Now this text is defined under the settate method"
        })
    }
    render(){
        return (
            <div>
            <h3>{this.state.message}</h3>
            <button onClick={()=> this.changeText()}>Change Text</button>
        </div>)
        
    }
}
export default UsingState;