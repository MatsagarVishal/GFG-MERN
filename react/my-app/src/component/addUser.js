import { Component } from 'react'



export default class AddUsers extends Component{
         add=(e)=> {
            e.preventDefault();
            alert("user is added")
    }
    render(){
        return(
            <div>
                <form>

                    <button onClick={this.add}>Click Here</button>
                </form>
                <h3>Add Users</h3>

            </div>
        )
    }
    }