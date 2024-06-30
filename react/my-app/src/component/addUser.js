import { Component } from 'react'



export default class AddUsers extends Component{
    hasData=()=>{
        let btn=document.getElementById("d");
        if(this.props.len==0){
            btn.style.display="none";
        }else{
            btn.style.display="block";
        }
    }

    add=(e)=> {
            e.preventDefault();
            console.log(e.target.elements.ud.value);
            let data=e.target.elements.ud.value;
            this.props.au(data);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.add}>

                    <input type="text" name="ud"/>
                    <button>Add</button>
                </form>
                
                    <button disabled={!this.props.hasData} onClick={this.delete} id="d">deleteAll</button>

            </div>
        )
    }
    }