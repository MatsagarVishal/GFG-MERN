import { Component } from "react";


export default class Counter extends Component {

    state = {
        counter: 1
    }
    add = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    decreas = () => {
        this.setState((prevState) => {
            
            return {
                counter: prevState.counter - 1
            }
        })
    }
    render() {
        return (
            <div>
                <p>counter is : {this.state.counter}</p>
                <button onClick={this.add}>increase</button>
                <button onClick={this.decreas}>decrease</button>
            </div>
        )
    }
}