import React, {Component} from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

class AnimalItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Link to = "/">
               <img src={this.props.url} alt = "No picture"/>
            </Link>
        )
    }
}
export default AnimalItem

