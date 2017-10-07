import React from 'react'
import {Link} from 'react-router'
import ModalBox from './modaleBox'
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
        let id = e.target.id,
            userKey = e.target.getAttribute('data-key');
        this.setState({
            userKey: userKey,
            show: true
        });
        if(id == 'forbid'){
            this.setState({showWarn : true})
        }
    }

    showChange(){
        this.setState(prevState => ({
            show: !prevState
        }));
    }

    render(){      
        if(!this.props.message.active && this.props.message.role != 'admin' && this.props.message.key){        
            return(
                <article className="message">
                    <div>Type: {this.props.message.type}</div>
                    <div>Name: {this.props.message.username}</div>
                    <div>Phone number: {this.props.message.phoneNumber}</div>
                    <div>Email: {this.props.message.email}</div>                    
                    <div>Date: {this.props.message.date}</div>
                    <div className='btn-offer'>
                        <button data-key={this.props.message.key} id='accept' onClick = {this.onClick}>Accept Order</button>
                        <button data-key={this.props.message.key} id='forbid' onClick = {this.onClick}>Forbid Order</button>
                    </div>
                    <ModalBox show={this.state.show} showWarn={this.state.showWarn} 
                        userKey={this.state.userKey} showChange = {this.showChange} 
                        onGiveOrders={this.props.onGiveOrders}/>
                </article>
            )
        }
        return null
    }
}
 
export default Message