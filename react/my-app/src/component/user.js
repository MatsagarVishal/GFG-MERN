import { Component } from 'react'



export default class User extends Component{
    render(){
        return(
            <h4>{this.props.user}</h4>
        )
    }
    }