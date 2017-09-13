import React, { Component } from 'react'
import './styles.scss'
import animal from '../data'

class AnimalPicture extends Component {
  render () {
    return <img src={animal.picture} alt='No picture' />
  }
}

export default AnimalPicture
