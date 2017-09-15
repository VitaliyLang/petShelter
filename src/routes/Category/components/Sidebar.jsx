import React, {Component} from 'react'
import Label from './Label.jsx'
import './Sidebar.scss'

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <aside className = "aside_category">
                <form onSubmit = {this.handleSubmit}>
                    <h2> Filter </h2>

                    <p> Sex </p>
                    <Label name = 'sex' value = 'Any' checked/><br/>
                    <Label name = 'sex' value = 'Male'/><br/>
                    <Label name = 'sex' value = 'Female'/>

                    <p> Size </p>
                    <Label name = 'size' value = 'Any' checked/><br/>
                    <Label name = 'size' value = 'Small'/><br/>
                    <Label name = 'size' value = 'Medium'/><br/>
                    <Label name = 'size' value = 'Large'/>

                    <p> Age </p>
                    <Label name = 'age' value = 'Any' checked/><br/>
                    <Label name = 'age' value = 'Baby' /><br/>
                    <Label name = 'age' value = 'Young' /><br/>
                    <Label name = 'age' value = 'Adult' /><br/>
                    <Label name = 'age' value = 'Senior' /><br/>

                    <button type = "submit"> Apply </button>
                </form>
            </aside>
        ) 
    }
}

export default Sidebar