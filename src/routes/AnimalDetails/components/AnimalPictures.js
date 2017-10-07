import React from 'react'
import './AnimalPictures.scss'
import { Carousel } from 'react-materialize'
import { connect } from 'react-redux'
import getAnimals from 'store/actions/animals'
import debounce from 'modules/helpers/debounce'

export default function AnimalPictures (props) {
  var arr = [1,2];
  var imgs = Array.isArray(props.animal.url)
  ? props.animal.url.map((url)=><div key = {url} className = 'img' style = {{backgroundImage: `url(${url})`}}/>)
  : props.animal.url 
    ?<div className='img' style={{ backgroundImage: `url(${props.animal.url})` }} />
    :<div className='img' style={{ backgroundImage: `url(http://www.chancefurlife.org/wp-content/themes/petsitter/images/job-placeholder.gif)` }} />;
  console.log(imgs)
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
