import React, { Component } from 'react'
import './AnimalPictures.scss'
import {Carousel} from 'react-materialize'
import { connect } from 'react-redux';
import getAnimals from 'store/actions/animals';
import debounce from 'modules/helpers/debounce';

class AnimalPictures extends Component {
  constructor(){
    super();
  }
  render() {
     return (
      <div className='pictures'>
        <Carousel>
          <div className = 'img' style = {{backgroundImage: `url(${this.props.animal.url})`}}/>
          <div className = 'img' style = {{backgroundImage: `url(${this.props.animal.url})`}}/>
          <div className = 'img' style = {{backgroundImage: `url(${this.props.animal.url})`}}/>
        
        </Carousel>
      </div>
    )

  }
}

export default AnimalPictures

//{this.props.animal.url.map((url)=><div key = {url} className = 'img' style = {{backgroundImage: `url(${url})`}}/>)}

/*           */


//