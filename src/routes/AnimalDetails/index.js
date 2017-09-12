import React, { Component } from 'react'
import AnimalInfo from './components/AnimalInfo'
import AnimalPicture from './components/AnimalPicture'

class AnimalDetails extends Component {
  render () {
    return (
      <div className='animal-info'>
        <AnimalInfo />
        <button>Take it!</button>
        <AnimalPicture />
      </div>
    )
  }
}

export default AnimalDetails
