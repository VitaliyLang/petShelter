import React, { Component } from 'react';
import './AnimalInfo.scss';
import { Button, Modal } from 'react-materialize';
import ModalBox from './ModalBox';

export default class AnimalInfo extends Component {
  render() {
    return (
      <aside className="aside_category details">
      <h2> Details </h2>
      <p>name: {this.props.animal.alias}</p>
      <p>sex: {this.props.animal.sex}</p>
      <p>age: {this.props.animal.age}</p>
      <p>size: {this.props.animal.size}</p>
      <p ref = {(el)=>this.modal=el}>color: {this.props.animal.color}</p>
      <p>vaccinations: {new String(this.props.animal.vaccinations||"")}</p>
      <Button type="submit" className="btn get waves-effect waves-light" onClick={this.props.click}> Adopt it </Button>
      <ModalBox show = {this.props.show} click = {this.props.click} adopt = {this.props.adopt} signUp = {this.props.signUp}/>
    </aside>
    )
  }
}
