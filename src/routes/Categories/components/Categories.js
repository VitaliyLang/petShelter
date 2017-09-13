import React from 'react'
import CategoriesPanel from './CategoriesPanel'
import './styles.scss'

let categoriesArr = ['dogs', 'cats', 'elephants', 'mices']

class Categories extends React.Component {
  render () {
    if (this.props.children) {
      return (
        this.props.children
      )
    } else {
      return (
        <CategoriesPanel categories={ categoriesArr }/>
      )
    }
  }
}

export default Categories
