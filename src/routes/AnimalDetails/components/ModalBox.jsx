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
        this.props.click();
    }
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className='modal_box_adopt'>
                <form className='modal_form' onSubmit={this.submit}>
                    <Input label="Name" validate = {true} required  minLength= '3' size = "10"/>
                    <Input type="email" label="Email" validate = {true} required/>
                    <Input type = "tel" validate = {true} label="Phone: (0XX) XXX-XX-XX" required  pattern="\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
                    <div>
                        <Button type = "submit" className="filter waves-effect waves-light primaryBtn"> Apply </Button>
                        <Button type = "reset" onClick={this.props.click} className="filter waves-effect waves-light primaryBtn"> Cancel </Button>
                    </div>
                </form>
            </div>

        )
    }
}