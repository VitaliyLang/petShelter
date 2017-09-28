import React, { Component } from 'react'
import AnimalInfo from './components/AnimalInfo'
import AnimalPictures from './components/AnimalPictures.js'
import { connect } from 'react-redux';
import getAnimals from 'store/actions/animals';
import modalAdopt from 'store/actions/modalAdopt';
import takeAnimal from 'store/actions/takeAnimal';
import signUp from 'store/actions/signup'

class AnimalDetails extends Component {
  constructor(props){
    super(props);
    this.btnClick = this.btnClick.bind(this);
  }
  componentWillMount() {
    let link = location.pathname.replace('categories', 'animals');
    this.props.onGetAnimals(link);
  }
  btnClick(){
    this.props.showModal(!this.props.show);
  }
  render() {
    return (
      <div className="flex-container img-detail">
        <AnimalInfo animal={this.props.listAnimals} show = {this.props.show} click = {this.btnClick} adopt = {this.props.takeAnimal} signUp = {this.props.signUp}/>
        <AnimalPictures animal={this.props.listAnimals} />
      </div>
    )
  }
}


export default connect(
  state => ({
    listAnimals: state.listAnimals.animals,
    show: state.modalAdopt.show
  }),
  dispatch => ({
    onGetAnimals: (link) => dispatch(getAnimals(link)),
    showModal: (bool) => dispatch(modalAdopt(bool)),
    takeAnimal: (key, category, status) => dispatch(takeAnimal(key, category, status)),
    signUp : (obj)=>dispatch(signUp(obj))
  })
)(AnimalDetails)