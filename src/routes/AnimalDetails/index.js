import React, { Component } from 'react'
import AnimalInfo from './components/AnimalInfo'
import AnimalPictures from './components/AnimalPictures.js'

class AnimalDetails extends Component {
  render () {
    return (
      <div className = "flex-container">
        <AnimalInfo />
        <AnimalPictures />
      </div>
    )
  }
}

export default AnimalDetails
