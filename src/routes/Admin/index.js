import React from 'react'
import NavigationPanel from './components/layouts/NavigationPanel'
import MainSection from './components/layouts/MainSection'
import Routing from './routing.js'
import './styles.scss'
import { connect } from 'react-redux'
import getMessages from '../../store/actions/messages'
import getAnimals from '../../store/actions/animals'
import getAnimalsv from '../../store/actions/animalsv'
import signin from '../../store/actions/signin'
import giveOrders from '../../store/actions/giveOrders'
import takeAnimal from '../../store/actions/takeAnimal'
import removeAnimal from '../../store/actions/removeAnimal'
import firebase from 'firebase'

class Admin extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.onGetAnimals('animals');
    this.props.onGetAnimalsv('animals');
    this.props.onGetMessages('users');
    //this.props.onRemoveAnimal('dog','-123-');

    this.props.onSignin();
  }
  
  componentWillReceiveProps(nextProps){
    if(!nextProps.signin.isAdmin && nextProps.signin.user.anonime){
      this.props.router.replace('/login');
    }
  }

  render () {
    return (
      <div className='wrapper'>
        <NavigationPanel />
        <MainSection>
          <Routing action={this.props.params.action} />
        </MainSection>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    signin: state.signin
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onGetMessages: (link) => dispatch(getMessages(link)),
    onGetAnimals: (link) => dispatch(getAnimals(link)),
    onGetAnimalsv: (link) => dispatch(getAnimalsv(link)),
    onSignin: () => dispatch(signin()),
    onGiveOrders: (userKey) => dispatch(giveOrders(userKey)),
    onTakeAnimal: (animalKey, category) => dispatch(takeAnimal(animalKey, category)),
    onRemoveAnimal: (category, animalKey) => dispatch(removeAnimal(category, animalKey))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
