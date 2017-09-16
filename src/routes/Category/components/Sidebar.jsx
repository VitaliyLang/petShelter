import React, {Component} from 'react'
import Label from './Label.jsx'
import MainInput from 'modules/inputs/MainInput'
import Button from 'modules/buttons/PrimaryButton'
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
      <aside className = "aside_category ver-scroll">
      <form onSubmit = {this.handleSubmit}>
      <p> Filter </p>

      <p> Sex </p>
      <div className="radio_box">
        <Label className="radio_btn" name = 'sex' value = 'Any'  />
        <Label name = 'sex' value = 'Male'/>
        <Label name = 'sex' value = 'Female'/>
      </div>
      <p> Size </p>
      <div className="radio_box">
        <Label name = 'size' value = 'Any' />
        <Label name = 'size' value = 'Small'/>
        <Label name = 'size' value = 'Medium'/>
        <Label name = 'size' value = 'Large'/>
      </div>

      <p> Age </p>
      <div className="radio_box">
        <Label name = 'age' value = 'Any' />
        <Label name = 'age' value = 'Baby' />
        <Label name = 'age' value = 'Young' />
        <Label name = 'age' value = 'Adult' />
        <Label name = 'age' value = 'Senior' />
      </div>
      <Button type = "submit"> Apply </Button>
      </form>
      </aside>
      ) 
  }
}

export default Sidebar