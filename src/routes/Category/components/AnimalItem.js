import React, {Component} from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

class AnimalItem extends Component{
    constructor(props){
        super(props);
        this.bottom;
        this.seen = false;
    }
    componentDidMount(){
        this.bottom = this.element.getBoundingClientRect().bottom;
    }
    render(){
        let inView = (this.bottom - this.props.scrolltop) < window.innerHeight;
        if(this.element){
            this.seen = (this.element.src == this.props.url)
        }
        return(
            <Link to='/animals/animal/1' >
               <img src={ inView || this.seen ? this.props.url : ''} alt ='' ref={(elem)=>this.element = elem}/>
            </Link>
        )
    }
}
export default AnimalItem

