import React, { Component } from 'react'
import Main from './components/Main.jsx'
import Sidebar from './components/Sidebar.jsx'
import './style.scss'
import { connect } from 'react-redux';
import modalAdopt from 'store/actions/modalAdopt';
import { PropTypes } from 'prop-types'

class Category extends Component {
  constructor (props) {
    super(props)
    this.close = this.close.bind(this);
  }
  componentWillMount(){
    let arr = ['dogs', 'cats', 'other'];
    if(arr.indexOf(this.context.router.params.categID.toLowerCase()) === -1){
      this.context.router.replace('/notfound');
    }
  }
  close(){
    this.props.showModal(false);
  }

  render () {
    let closer;
    if (this.props.show){
      closer = <div onClick = {this.close} className = "closer"/>
    }else{
      closer = null;
    }
    if (this.props.children) {
      return (
        this.props.children
      )
    } else {
      return (
        <div className='flex-container'>
          <Sidebar location={this.props.location} />
          <Main category={this.props.params.categID} />
          {closer}
        </div>
      )
    }
  }
}

Category.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(
  state => ({
    show: state.animalDetail.show
  }),
  dispatch => ({
      showModal: (bool) => dispatch(modalAdopt(bool))
  })
)(Category)


