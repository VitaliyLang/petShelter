import React from 'react'
import './AnimalPictures.scss'
import { Carousel } from 'react-materialize'
import { connect } from 'react-redux'
import getAnimals from 'store/actions/animals'
import debounce from 'modules/helpers/debounce'

export default function AnimalPictures (props) {
  return (
    <div className='pictures'>
      <Carousel>
        <div className='img' style={{ backgroundImage: `url(${props.animal.url})` }} />
        <div className='img' style={{ backgroundImage: `url(${props.animal.url})` }} />
        <div className='img' style={{ backgroundImage: `url(${props.animal.url})` }} />

      </Carousel>
    </div>
  )
}

// {this.props.animal.url.map((url)=><div key = {url} className = 'img' style = {{backgroundImage: `url(${url})`}}/>)}

/*           */

//
