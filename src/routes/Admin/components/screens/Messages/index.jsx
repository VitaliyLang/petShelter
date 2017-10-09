import React from 'react'
import {connect} from 'react-redux'
import Message from './Message/'
import './styles.scss'
import giveOrders from 'store/actions/giveOrders'
import addAnimal from 'store/actions/addAnimal'
import takeOrder from 'store/actions/takeOrder'
import takeAnimal from 'store/actions/takeAnimal'
import getAnimals from 'store/actions/animals'

class Messages extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messages: this.props.messages,
            addAnimal: this.props.addAnimal,
            takenAnimal: this.props.takeAnimal
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            messages:nextProps.messages,
            addAnimal: nextProps.addAnimal,
            takenAnimal: nextProps.takenAnimal
        });
    }

    render(){

        if(!this.state.messages){
            return null
        }

       let keys = Object.keys(this.props.messages), 
           messagesArr = [], tamplate = [];

       messagesArr =  keys.map((item) => this.state.messages[item]);
        
       tamplate = messagesArr.map((item,i) => {
                     return(                    
                        <Message key={i} message={item} 
                        onGiveOrders={this.props.onGiveOrders}
                        onAddAnimal={this.props.onAddAnimal}
                        addAnimal={this.state.addAnimal}
                        onTakeOrder={this.props.onTakeOrder}
                        onTakeAnimal={this.props.onTakeAnimal}
                        onGetAnimals={this.props.onGetAnimals}
                        takenAnimal={this.state.takenAnimal}/>
                    )
                })
        return(
            <section className='messages'>
                  {tamplate}
            </section>
        )
    }
}

export default connect(
    state => ({
        messages:state.messages.messages,
        addAnimal:state.addAnimal,
        takeOrder:state.takeOrder,
        takenAnimal: state.listAnimals.animals
    }),
    dispatch => ({
        onGiveOrders : (userkey) => dispatch(giveOrders(userkey)),
        onAddAnimal: (userKey, animalObj, photo) => dispatch(addAnimal(userKey, animalObj, photo)),
        onTakeOrder: (userKey) => dispatch(takeOrder (userKey)),
        onTakeAnimal: (animalKey, category, status) => dispatch(takeAnimal(animalKey, category, status)),
        onGetAnimals: (link) => dispatch(getAnimals(link))
    })
)(Messages)