import React, { Component } from 'react'
import animal from '../data'
import './AnimalInfo.scss'
import { Button} from 'react-materialize'

class AnimalInfo extends Component {

  render() {
    return (
      <aside className="aside_category details">
        <h2> Details </h2>
        <p>name: {animal.name}</p>
        <p>sex: {animal.sex}</p>
        <p>age: {animal.age}</p>
        <p>weight: {animal.weight}</p>
        <p>color: {animal.color}</p>
        <p>vaccinations: {new String(animal.vaccination)}</p>
        <Button type="submit" className="get waves-effect waves-light"> Adopt it </Button>
      </aside>
    )
  }
}

export default AnimalInfo
