import React, { Component } from 'react'
import './styles.scss'
import animal from '../data'

class AnimalInfo extends Component {
  render () {
    return (
      <ul className='text-info'>
        <li>animal: {animal.type},</li>
        <li>name: {animal.name},</li>
        <li>sex: {animal.sex},</li>
        <li>age: {animal.age},</li>
        <li>weight: {animal.weight},</li>
        <li>color: {animal.color},</li>
        <li>vaccinations: {String(animal.vaccination)}.</li>
      </ul>
    )
  }
}

export default AnimalInfo
