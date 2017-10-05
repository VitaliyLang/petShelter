import React, { Component } from 'react';
import Header from './component/Header/header';
import Breadcrumbs from 'react-breadcrumbs';
import "../styles/main.scss";
import { connect } from 'react-redux';

class StaticLayout extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let animalID = this.props.listAnimals && this.props.listAnimals.alias|| "";
    let params = {};
    if(this.props.params.animalID){
      Object.assign(params, this.props.params, {animalID})
    }else{
      params = this.props.params;
    }
    return (
      <div>
        <Header params = {this.props.params} />
        <div className="main_section" >
          <Breadcrumbs className='breadcrumbs' routes={this.props.routes} params={params} />
          {this.props.children}
        </div>
        </div>
    )
  }
}

export default connect(
  state => ({
    listAnimals: state.listAnimals.animals
  }),
  dispatch => ({})
)(StaticLayout)