import { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import AddUser from './addUser';
import Users from './users';

export default class MainApp extends Component {
    state = {
        headerData: 'Welcome to header',
        footerData: 'Welcome to Footer',
        userData: []
    }
    deleteAll = () => {
        this.setState(() => {
            return {
                userData: []
            }
        })
    }
    addUser = (data) => {
        this.setState((prevState) => {
            
            return {
                userdata: prevState.userData.push(data)
                
            }
           
        })
        console.log(this.state.userData)
    }
    render() {
        
 (
            <>
                <Header />
                <AddUser au={this.addUser} da={this.deleteAll} len={this.state.userData.length>0} />
                <Users userdata={this.state.userData}/>
                
                {/* <p>Holla from react</p> */}
                {/* <h6></h6> */}
                <Footer />
            </>


        )
    }
}

