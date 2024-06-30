import { Component } from 'react'
import User from './user';


export default class Users extends Component{
    render(){
        return(
            <>
            {this.props.userdata.map((ud)=>{
                return <User user={ud}/>
            })}
            
            
            </>
        )
    }
    }