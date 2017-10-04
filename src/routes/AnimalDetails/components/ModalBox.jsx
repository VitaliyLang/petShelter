import React, { Component } from 'react';
import './ModalBox.scss';
import {Button, Input} from 'react-materialize';

export default class ModalBox extends Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e){
        e.preventDefault();
        let pathname= location.pathname.split('/');
        let key = pathname[pathname.length-1];
        let category = pathname[pathname.length-2];
        this.props.adopt(key, category.toLowerCase(), false);
        this.props.click();
        let user = {
            name: this.name.state.value,
            email: this.email.state.value,
            tel: this.tel.state.value,
            category,
            type: 'get'
        };
        this.props.signUp(user);
    }
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className='modal_box_adopt'>
                <form className='modal_form' onSubmit={this.submit}>
                    <Input label="Name" validate = {true} required  minLength= '3' size = "10" ref = {(input)=>this.name = input}/>
                    <Input type="email" label="Email" validate = {true} required ref = {(input)=>this.email = input}/>
                    <Input type = "tel" validate = {true} label="Phone: (0XX) XXX-XX-XX" required  pattern="\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}" ref = {(input)=>this.tel = input}/>
                    <div>
                        <Button type = "submit" className=" btn waves-effect waves-light"> Apply </Button>
                        <Button type = "reset" onClick={this.props.click} className=" btn waves-effect waves-light"> Cancel </Button>
                    </div>
                </form>
            </div>

        )
    }
}