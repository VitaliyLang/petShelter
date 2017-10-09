import React from 'react'
import {Link} from 'react-router'
import ModalBox from './modaleBox'
import {Icon} from 'react-materialize';
import './styles.scss'

class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            showWarn : false,
            userKey: null
        };
        this.onClick = this.onClick.bind(this);
        this.showChange = this.showChange.bind(this);  
    }

    onClick(e){
        let target = e.target;
        if(target.tagname !== 'BUTTON'){
            target = target.parentNode;
        }
        let id = target.id,
            userKey = target.getAttribute('data-key');
        this.setState({
            userKey: userKey,
            show: true
        });
        if(id == 'forbid'){
            this.setState({showWarn : true})
        }else{
            this.setState({showWarn : false})
        }
    }

    showChange(){
        this.setState(prevState => ({
            show: !prevState
        }));
    }

    render(){      
        if(!this.props.message.active && this.props.message.role != 'admin' && this.props.message.key){
            let prefLink = location.protocol+'//'+location.host;
            let linkToPet = this.props.message.linktoPet?prefLink+this.props.message.linktoPet:'Pet not exist yet'        
            return(
                <article className="message">
                    <div><span>Type:</span> {this.props.message.type}</div>
                    <div><span>Name:</span> {this.props.message.name}</div>
                    <div><span>Phone number:</span> {this.props.message.tel}</div>
                    <div><span>Email:</span> {this.props.message.email}</div>                    
                    <div><span>Date:</span> {this.props.message.date}</div>
                    <div><span>Link to pet:</span> {linkToPet}</div>
                    <div className='btn-offer'>
                        <button data-key={this.props.message.key} id='accept' onClick = {this.onClick}>
                            <Icon small>check</Icon>    
                        </button>
                        <button data-key={this.props.message.key} id='forbid' onClick = {this.onClick}>
                            <Icon small>cancel</Icon>
                        </button>
                    </div>
                    <ModalBox show={this.state.show} showWarn={this.state.showWarn} 
                        userKey={this.state.userKey} showChange = {this.showChange}
                        message={this.props.message} 
                        onGiveOrders={this.props.onGiveOrders}
                        onAddAnimal={this.props.onAddAnimal}
                        addAnimal={this.props.addAnimal}
                        onTakeOrder={this.props.onTakeOrder}
                        onTakeAnimal={this.props.onTakeAnimal}
                        onGetAnimals={this.props.onGetAnimals}
                        takenAnimal={this.props.takenAnimal}/>
                </article>
            )
        }
        return null
    }
}
 
export default Message