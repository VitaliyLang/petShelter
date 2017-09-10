import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './style.scss'

class Category extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "flex-container">
                <Sidebar/>
                <Main category = {this.props.params.categID}/>
            </div>
        )
    }
}
export default Category;