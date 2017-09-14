import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import CategoriesPanel from './CategoriesPanel'
import PropTypes from 'prop-types'
import './styles.scss'

const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

import {ReadItem} from '../../../components/fireBase'

class Categories extends React.Component {
  static propTypes = {
    categories: PropTypes.object,
    firebase: PropTypes.object
  }
  render(){
    let categoriesArr = [];
    const { categories } = this.props;
    categoriesArr = ReadItem(categories);
    if (this.props.children) {
      return (
        this.props.children
      )
    } else {
      return (
        <CategoriesPanel categories={categoriesArr} />
      )
    }
  }
}

const wrappedCategories = firebaseConnect([
  'categories'
])(Categories)

export default connect(
  ({firebase}) => ({
    categories: dataToJS(firebase, 'categories'),
    profile: pathToJS(firebase, 'profile')
  })
)(wrappedCategories)

