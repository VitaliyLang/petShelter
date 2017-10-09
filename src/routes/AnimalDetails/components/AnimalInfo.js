import React, {Component} from 'react'
import './AnimalInfo.scss'
import { Button, Modal } from 'react-materialize'
import ModalBox from './ModalBox'

class AnimalInfo extends Component{
  constructor(props){
    super(props);
  }
  render(){
  let Btn,
   message = null;
  if (!this.props.animal.active) {
    Btn = <button disabled className='prohibited'>Adopted</button>
  } else if (this.props.isOffline) {
    Btn = <Button type='submit' className='btn get waves-effect waves-light disabled' onClick={this.props.click}> Adopt it </Button>
    message = <p className = 'alert red-text text-darken-3'>
        Please connect to the internet
    </p>
  } else {
    Btn = <Button type='submit' className='btn get waves-effect waves-light' onClick={this.props.click}> Adopt it </Button>
  }
  return (
    <aside className='aside_category details'>
      <h2> Details </h2>
      {this.props.animal.name? <p>name: {this.props.animal.alias}</p> : null}
      {this.props.animal.sex? <p>sex: {this.props.animal.sex}</p> : null}
      {this.props.animal.age? <p>age: {this.props.animal.age}</p> : null}
      {this.props.animal.size? <p>size: {this.props.animal.size}</p> : null}
      {this.props.animal.color? <p>color: {this.props.animal.color}</p> : null}
      {this.props.animal.color == undefined?<p>vaccinations: {this.props.animal.vaccinations? 'yes': 'no'}</p> : null}
      {Btn}
      {message}
      <ModalBox onGetAnimals = {this.props.onGetAnimals} params = {this.props.params} show={this.props.show} click={this.props.click} adopt={this.props.adopt} signUp={this.props.signUp} />
    </aside>
  )
}
}

export default AnimalInfo;
