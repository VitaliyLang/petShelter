import React, { Component } from 'react'
import Header from './component/Header/header'
import Breadcrumbs from 'react-breadcrumbs'

class StaticLayout extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Header />
        <Breadcrumbs className='breadcrumbs' routes={this.props.routes} params={this.props.params} />
        {this.props.children}
      </div>
    )
  }
}

export default StaticLayout
