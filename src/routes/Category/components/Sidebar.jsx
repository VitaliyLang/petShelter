import React, {Component} from 'react'
import './Sidebar.scss'
import {Input, Button} from 'react-materialize'


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
                    <Input type = 'radio'  value = "green" name = 'sex' className='with-gap' label = 'Any' value = 'any'  defaultChecked />
                    <Input type = 'radio' name = 'sex' className='with-gap' label = 'Male' value = 'male'/>
                    <Input type = 'radio' name = 'sex' className='with-gap' label = 'Female' value = 'female'/>

                    <p> Size </p>
                    <Input type = 'radio' name = 'size' className='with-gap' label = 'Any' value = 'any'  defaultChecked />
                    <Input type = 'radio' name = 'size' className='with-gap' label = 'Small' value = 'small'/>
                    <Input type = 'radio' name = 'size' className='with-gap' label = 'Medium' value = 'medium'/>
                    <Input type = 'radio' name = 'size' className='with-gap' label = 'Large' value = 'large'/>

                    <p> Age </p>
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Any' value = 'any'  defaultChecked />
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Baby' value = 'baby' />
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Young' value = 'young' />
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Adult' value = 'adult' />
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Senior' value = 'senior' />

                    <Button type = "submit" className = "filter waves-effect waves-light primaryBtn"> Apply </Button>
                </form>
            </aside>
        ) 
    }
}

export default Sidebar