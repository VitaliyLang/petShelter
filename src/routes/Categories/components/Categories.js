import React from 'react'
import { connect } from 'react-redux'
import CategoriesPanel from './CategoriesPanel'
import PropTypes from 'prop-types'
import getInvite from '../../../store/actions/categories'
import getAnimals from '../../../store/actions/animals'
import {ReadItem} from '../../../components/fireBase'
import './styles.scss'

class Categories extends React.Component {

  static propTypes = {
    categories: PropTypes.object
  }

  constructor(props){
    super(props)
    this.categoriesArr = [];
  }

  componentWillMount(){
    let {onGetInvite} = this.props;
    onGetInvite('/categories');
  }
  
  render(){
    let { categories, onGetInvite, listAnimals, onGetAnimals } = this.props;
    if(categories.error || categories.isLoading){
      return null;
    }

    this.categoriesArr = ReadItem(categories.categories);
      
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)

