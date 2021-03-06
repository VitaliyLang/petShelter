import React from 'react'
import { connect } from 'react-redux'
import CategoriesPanel from './CategoriesPanel'
import PropTypes from 'prop-types'
import getInvite from '../../../store/actions/categories'
import getAnimals from '../../../store/actions/animals'
import cat from '../assets/cat-20480-1536.jpg';
import dog from '../assets/dog-2048-1536.jpg';
import other from '../assets/other-2048.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import './styles.scss'

class Categories extends React.Component {
  static propTypes = {
    categories: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.categoriesArr = ['Dogs','Cats','Other'];
  }

 

  render () {
    let { categories, onGetInvite, listAnimals, onGetAnimals } = this.props;


    if (this.props.children) {
      return (
          this.props.children
      )
    } else {
      return (
        <CategoriesPanel categories={this.categoriesArr} onGetAnimals={onGetAnimals} listAnimals={listAnimals} />
      )
    }
  }
}

let mapStateToProps = (state) => {
  return {
    categories: state.categories,
    listAnimals: state.listAnimals
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onGetInvite: (link) => dispatch(getInvite(link)),
    onGetAnimals: (link) => dispatch(getAnimals(link))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
