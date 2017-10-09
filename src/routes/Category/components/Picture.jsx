import React, { Component } from 'react';
import { Link } from 'react-router';
import placeholder from './job-placeholder.gif';


class Picture extends Component{
    constructor(){
        super();
        this.state = {
            url : placeholder
        }
        this.update = this.update.bind(this);
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
        this.getImage(this.props.url).then(this.update)
    }
    update(){
        let url;
        if(Array.isArray(this.props.url)){
            url = this.props.url[0]
        }else{
            url = this.props.url
        }
        this.setState({
            url
        })
    }
    render(){
        return <Link to={this.props.to}
        style={{ backgroundImage: `url(${this.state.url || placeholder})` }}
      />
    }
}

export default Picture;