import React, { Component } from 'react'
import { browserHistory} from 'react-router';
import AnimalInfo from './components/AnimalInfo'
import AnimalPictures from './components/AnimalPictures.js'
import { connect } from 'react-redux';
import './style.scss'
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
    this.props.onGetAnimals(link).then(()=>{console.log(this.props.listAnimals.animals)});
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.listAnimals.animals === null){
      browserHistory.push('/');
    }
  }
  btnClick(){
    this.props.showModal(!this.props.show);
  }
  render() {
    if(this.props.succeed){
      return <h1> succeed </h1>
    }
    if(this.props.listAnimals.isLoading || !this.props.listAnimals.animals){
      return null
    }
    return (
      <div className="flex-container img-detail">
        <AnimalInfo animal={this.props.listAnimals.animals} show = {this.props.show} click = {this.btnClick} adopt = {this.props.takeAnimal} signUp = {this.props.signUp}/>
        <AnimalPictures animal={this.props.listAnimals.animals} />
      </div>
    )
  }
}


export default connect(
  state => ({
    listAnimals: state.listAnimals,
    show: state.modalAdopt.show,
    succeed: state.takeAnimal.isTaking
  }),
  dispatch => ({
    onGetAnimals: (link) => dispatch(getAnimals(link)),
    showModal: (bool) => dispatch(modalAdopt(bool)),
    takeAnimal: (key, category, status) => dispatch(takeAnimal(key, category, status)),
    signUp : (obj)=>dispatch(signUp(obj))
  })
)(AnimalDetails)