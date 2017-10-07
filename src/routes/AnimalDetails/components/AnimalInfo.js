import React, {Component} from 'react'
import './AnimalInfo.scss'
import { Button, Modal } from 'react-materialize'
import ModalBox from './ModalBox'

class AnimalInfo extends Component{
  constructor(props){
    super(props);
  }
  render(){
  let Btn
  if (!this.props.animal.active) {
    Btn = <div className='btn prohibited'>Adopted</div>
  } else if (this.props.isOffline) {
    Btn = <Button type='submit' className='btn get waves-effect waves-light disabled' onClick={this.props.click}> Adopt it </Button>
  } else {
    Btn = <Button type='submit' className='btn get waves-effect waves-light' onClick={this.props.click}> Adopt it </Button>
  }
  return (
    <aside className='aside_category details'>
      <h2> Details </h2>
      <p>name: {this.props.animal.alias}</p>
      <p>sex: {this.props.animal.sex}</p>
      <p>age: {this.props.animal.age}</p>
      <p>size: {this.props.animal.size}</p>
      <p>color: {this.props.animal.color}</p>
      <p>vaccinations: {String(this.props.animal.vaccinations || false)}</p>
      {Btn}
      <ModalBox onGetAnimals = {this.props.onGetAnimals} params = {this.props.params} show={this.props.show} click={this.props.click} adopt={this.props.adopt} signUp={this.props.signUp} />
    </aside>
  )
}
}

export default AnimalInfo;
