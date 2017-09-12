import React, { Component } from 'react'
import AnimalInfo from './components/AnimalInfo'
import AnimalPicture from './components/AnimalPicture'

class AnimalDetails extends Component {
  render () {
    return (
      <div className='animal-info'>
        <AnimalInfo />
        <AnimalPicture />
        <button>Take it!</button>
      </div>
    )
  }
}

export default AnimalDetails
