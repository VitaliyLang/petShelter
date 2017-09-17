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
        const key = Object.keys(this.props.message)[0];
        if(!this.props.message[key].active && this.props.message[key].role != 'admin'){
            return(
                <article className="message">
                    <div>Name: {this.props.message[key].username}</div>
                    <div>Phone number: {this.props.message[key].phoneNumber}</div>
                    <div>Email: {this.props.message[key].email}</div>
                    <div>Date: {this.props.message[key].date}</div>
                    <button><Link className='links' to={'/admin/takeOrder'} id={key}>Take Order</Link></button>
                </article>
            )
        }
        return null
    }
}

export default Message