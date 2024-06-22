import { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import AddUser from './addUser';
import Users from './users';

export default class MainApp extends Component {
    render() {
        
        return (
            <>
            <Header/>
            <AddUser/>
            <Users userdata={this.props.hd}/>
            <p>Holla from react</p>
            {/* <h6></h6> */}
            <Footer/>
            </>
            

        )
    }
}

