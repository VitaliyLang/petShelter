import React from 'react'
import {Link} from 'react-router'
import './styles.scss'

class Message extends React.Component {
    constructor() {
        super();
        /*this.state = {
            type: 'take',
            name: 'Pet Lover',
            pnoneNumber: '0982124299',
            email: 'petLover@gmail.com',            
            date: new Date()
        }*/
    }

    render(){
       
        if(!this.props.message.active && this.props.message.role != 'admin'){
            let buttonName = 'Give';
            if(this.props.message.type){
                buttonName = this.props.message.type[0].toUpperCase()+this.props.message.type.slice(1);
            }
        
            return(
                <article className="message">
                    <div>Name: {this.props.message.username}</div>
                    <div>Phone number: {this.props.message.phoneNumber}</div>
                    <div>Email: {this.props.message.email}</div>
                    <div>Date: {this.props.message.date}</div>
                    <div className='btn-offer'>
                        <button><Link className='links' to={'/admin/takeOrder'} id={this.props.message.key}>{buttonName} Offer</Link></button>
                        <button><Link className='links' to={'#'}>Forbid Offer</Link></button>
                    </div>
                </article>
            )
        }
        return null
    }
}
 
export default Message