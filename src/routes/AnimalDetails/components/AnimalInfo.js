import React from 'react'
import './AnimalInfo.scss'
import { Button, Modal } from 'react-materialize'
import ModalBox from './ModalBox'

export default function AnimalInfo (props) {
  if(props.animal.active == undefined) return null;
  let Btn
  if (!props.animal.active) {
    Btn = <p style={{ color:'red', textAlign:'center' }}>Adopted</p>
  } else {
    Btn = <Button type='submit' className='btn get waves-effect waves-light' onClick={props.click}> Adopt it </Button>
  }
  console.log(props.animal.active);
  console.log(props.succeed)
  return (
    <aside className='aside_category details'>
      <h2> Details </h2>
      <p>name: {props.animal.alias}</p>
      <p>sex: {props.animal.sex}</p>
      <p>age: {props.animal.age}</p>
      <p>size: {props.animal.size}</p>
      <p>color: {props.animal.color}</p>
      <p>vaccinations: {String(props.animal.vaccinations || false)}</p>
      {Btn}
      <ModalBox show={props.show} click={props.click} adopt={props.adopt} signUp={props.signUp} />
    </aside>
  )
}
