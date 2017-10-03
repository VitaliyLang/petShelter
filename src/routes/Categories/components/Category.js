import React from 'react';
import { Link } from 'react-router';
import cat from '../assets/cat-20480-1536.jpg';
import dog from '../assets/dog-2048-1536.jpg';
import other from '../assets/other-2048.jpg';

class Category extends React.Component {
  constructor(props){
    super(props)
    this.categorClick = this.categorClick.bind(this)
  }

  categorClick (e) {
    e.preventDefault()
    let link = '/animals/' + e.target.id;
    let { onGetAnimals } = this.props
    onGetAnimals(link)
  }

  render () {

    let data = this.props.category;

    let objImg = {
      cat : cat,
      dog : dog,
      other : other
    } 
    
    let imgStyle = {
      background: 'url('+objImg[data.toLowerCase()]+')',
      backgroundSize :'cover',
      height: '100vh'
    };

    return (
      <div className='category'>
        <div className='category-img' style={imgStyle}></div>
        <p className='legend' onClick={this.categorClick}>
          <Link to={'/categories/' + data.toLowerCase()} id={data.toLowerCase()}>
            {data}
          </Link>
        </p>
      </div>
    )
  }
}

export default Category
