import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Main from './components/Main.jsx'
import Sidebar from './components/Sidebar.jsx'
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
        <div className='flex-container'>
          <Sidebar location={this.props.location} />
          <Main category={this.props.params.categID} />
        </div>
      )
    }
  }
}

export default Category
