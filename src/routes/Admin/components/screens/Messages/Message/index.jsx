import React from 'react'
import {Link} from 'react-router'
import './styles.scss'

class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            type: 'take',
            name: 'Pet Lover',
            pnoneNumber: '0982124299',
            email: 'petLover@gmail.com',            
            date: new Date()
        }
    }

    render(){
        return(
            <article className="message">
                <div>Name: {this.state.name}</div>
                <div>Phone number: {this.state.phoneNumber}</div>
                <div>Email: {this.state.email}</div>
                <div>Date: {this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</div>
                <button><Link className='links' to={'/admin/takeOrder'}>Take Order</Link></button>
            </article>
        )
    }
}

export default Message