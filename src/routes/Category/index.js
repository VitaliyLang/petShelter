import React, { Component } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './style.scss'

class Category extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    if (this.props.children) {
      return (
        this.props.children
      )
    } else {
      return (
        <div className=" flex-container ">
          <Sidebar/>
          <Main category={this.props.params.categID}/>
        </div>
      )
    }
  }
}

export default Category