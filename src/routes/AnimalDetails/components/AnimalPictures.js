import React, { Component } from 'react'
import './AnimalPictures.scss'
import {Carousel} from 'react-materialize'
import { connect } from 'react-redux';
import getAnimals from 'store/actions/animals';

class AnimalPictures extends Component {

  render() {
    if(!this.props.listAnimals){
      return null;
    }
     return (
      <div className='pictures'>
        <Carousel options={{ fullWidth: true, indicators: true }}>
          <div style = {{backgroundImage: `url(${this.props.listAnimals.url})`}}/>
        </Carousel>
      </div>
    )

  }
}

export default connect(
  state => ({
    listAnimals: state.listAnimals.animals
  }),
  dispatch => ({onGetAnimals: (link) => dispatch(getAnimals(link))})
)(AnimalPictures)

//
//          
//
//<div style = {{backgroundImage: `url(${this.props.listAnimals})`}}/>
        //<div style = {{backgroundImage: `url(${this.props.listAnimals})`}}/>
