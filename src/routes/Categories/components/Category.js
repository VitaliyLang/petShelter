import React from 'react';
import { Link } from 'react-router';
import cat from '../assets/cat-20480-1536.jpg';
import dog from '../assets/dog-2048-1536.jpg';
import other from '../assets/other-2048.jpg';

class Category extends React.Component {
  constructor(props){
    super(props)
    this.categorClick = this.categorClick.bind(this);
    this.state = {width:null};
  }

  categorClick (e) {
    e.preventDefault()
    let link = '/animals/' + e.target.id;
    let { onGetAnimals } = this.props
    onGetAnimals(link)
  }


  componentDidMount(){
    const width = this.refs.legend.offsetWidth;
    this.setState({width:width});
  }

  render () {

    let data = this.props.category;

    let objImg = {
      cats : cat,
      dogs : dog,
      other : other
    } 
    let classes = Object.keys(objImg);

    
    let imgStyle = {
      backgroundImage: 'url('+objImg[data.toLowerCase()]+')'
    };

    let legendPos = {
      left: 'calc(50% - '+this.state.width/2+'px)'
    }
    return (
      <div className='category'>
        <div className='category-img' style={imgStyle} id={data.toLowerCase()}></div>
        <p className='legend' onClick={this.categorClick} ref='legend' style={legendPos}>
          <Link to={'/categories/' + data.toLowerCase()} id={data.toLowerCase()}>
            {data}
          </Link>
        </p>
      </div>
    )
  }
}

export default Category
