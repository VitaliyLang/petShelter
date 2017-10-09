import React, { Component } from 'react';
import './AnimalPictures.scss'
import { Carousel } from 'react-materialize'
import placeholder from './job-placeholder.gif';
import spinner from './Spinner.gif'

class AnimalPictures extends Component {
  constructor() {
    super();
    this.state = {
      url: []
    };
    this.url;
    this.getImage = this.getImage.bind(this);
    this.count;
  }
  getImage(url) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.src = url;
      img.onload = function () {
        resolve(url)
      }
      img.onerror = function () {
        reject(url)
      }
    })
  }
  componentWillMount() {
    if (Array.isArray(this.props.animal.url)) {
      this.props.animal.url.forEach((url) => {
        this.getImage(url)
          .then(() => this.setState((prevState) => ({ url: [...prevState.url, url] })))
          .catch(() => this.setState((prevState) => ({ url: [...prevState.url, placeholder] })))
      })
    } else {
      this.setState({ url: this.props.animal.url });
      this.getImage(this.props.animal.url)
        .then(() => this.setState({ url: this.props.animal.url }))
        .catch(() => this.setState({ url: placeholder }))
    }
  }
  render() {
    if (Array.isArray(this.props.animal.url)) {
      if (this.state.url.length !== this.count) {
        this.imgs = Array.isArray(this.state.url)
          ? this.state.url.map((url, index) => <div key={index} className='img' style={{ backgroundImage: `url(${url})` }} />)
          : <div />;
        this.count = this.state.url.length;
      }
      if (!this.state.url.length || this.state.url.length < this.props.animal.url.length) {
        return null
      }
      console.log(this.imgs)
      return (
        <div className='pictures'>
          <Carousel>
            {this.imgs}
          </Carousel>
        </div>
      )
    } else {
      if (!this.state.url.length) {
        return null
      }
      return (
        <div className='pictures'>
          <div className='img' style={{ backgroundImage: `url(${this.state.url})` }} />
        </div>
      )
    }
  }
}
export default AnimalPictures;
