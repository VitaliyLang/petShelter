import React, { Component } from 'react'
import './AnimalPictures.scss'
import {Carousel} from 'react-materialize'
import animal from '../data'

class AnimalPictures extends Component {
  render() {
    return (
      <div className='pictures'>
        <Carousel options={{ fullWidth: true, indicators: true }}>
          <div style = {{backgroundImage: 'url(http://cdn3-www.dogtime.com/assets/uploads/gallery/goldador-dog-breed-pictures/puppy-1.jpg)'}}/>
          <div style = {{backgroundImage: 'url(http://www.thelabradorsite.com/wp-content/uploads/2015/07/yellow-labrador-puppy-garden.jpg)'}}/>
        </Carousel>
      </div>
    )

  }
}

export default AnimalPictures
