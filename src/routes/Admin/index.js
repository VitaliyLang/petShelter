import React from 'react';
import NavigationPanel from './components/layouts/NavigationPanel';
import MainSection from './components/layouts/MainSection';
import Routing from './routing.js';
import './styles.scss';
import { connect } from 'react-redux';
import getMessages from '../../store/actions/messages';
import getAnimals from '../../store/actions/animals';
import signin from '../../store/actions/signin';
import giveOrders from '../../store/actions/giveOrders';
import takeAnimal from '../../store/actions/takeAnimal';
import firebase from 'firebase';

class Admin extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.onSignin();
        this.props.onGetMessages('/users');
        this.props.onGetAnimals('/animals');
        //this.props.onTakeAnimal('-KupDqW5nCMTBujGEZVh', 'dog');
        //this.props.onGiveOrders('GeBCjUmz9TNgddaAp1hiN9KbTGl2');
    }

    render(){
        return(
            <div className="wrapper">
                
                <NavigationPanel />
                <MainSection>
                    <Routing action={this.props.params.action}  />
                </MainSection>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onGetMessages: (link) => dispatch(getMessages(link)),
    onGetAnimals: (link) => dispatch(getAnimals(link)),
    onSignin: () => dispatch(signin()),
    onGiveOrders: (userKey) => dispatch(giveOrders(userKey)),
    onTakeAnimal: (animalKey,category) => dispatch(takeAnimal(animalKey,category))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
  