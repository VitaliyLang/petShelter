import React from 'react'
import './AnimalPictures.scss'
import { Carousel } from 'react-materialize'
import { connect } from 'react-redux'
import getAnimals from 'store/actions/animals'
import debounce from 'modules/helpers/debounce';
import placeholder from './job-placeholder.gif';

export default function AnimalPictures (props) {
  var arr = [1,2];
  var imgs = Array.isArray(props.animal.url)
  ? props.animal.url.map((url)=><div key = {url} className = 'img' style = {{backgroundImage: `url(${url})`}}/>)
  : props.animal.url 
    ?<div className='img' style={{ backgroundImage: `url(${props.animal.url})` }} />
    :<div className='img' style={{ backgroundImage: `url(${placeholder})` }} />;
  return (
    <div className='pictures'>
      <Carousel>
        {imgs}
      </Carousel>
    </div>
  )
}

// 

/*           */

//
