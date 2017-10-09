import React, { Component } from 'react';
import { Link } from 'react-router';
import placeholder from './job-placeholder.gif';
import spinner from './Spinner.gif'


class Picture extends Component{
    constructor(){
        super();
        this.state = {
            url : spinner,
            backgroundSize : '50%'
        };
        this.url;
        this.getImage = this.getImage.bind(this);
    }
    getImage(url){
        return new Promise(function(resolve, reject){
            var img = new Image();
            img.src = url;
            img.onload = function(){
                resolve(url)
            }
            img.onerror = function(){
                reject(url)
            }
        })
    }
    componentWillMount(){
        if(Array.isArray(this.props.url)){
            this.url = this.props.url[0];
        }else{
            this.url = this.props.url
        }
        this.getImage(this.url)
            .then(()=>this.setState({url: this.url, backgroundSize: 'cover'}))
            .catch(()=>this.setState({url: placeholder, backgroundSize: 'cover'}))
    }
    render(){
        return <Link to={this.props.to}
        style={{ backgroundImage: `url(${this.state.url || placeholder})`, backgroundSize : this.state.backgroundSize }}
      />
    }
}

export default Picture;