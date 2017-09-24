import React, { Component } from 'react'
import Header from './component/Header/header'
import Breadcrumbs from 'react-breadcrumbs'
import "../styles/main.scss";
class StaticLayout extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Header />
        <div className="main_section">
          <Breadcrumbs className='breadcrumbs' routes={this.props.routes} params={this.props.params} />
          {this.props.children}
        </div>
        </div>
    )
  }
}

export default StaticLayout
