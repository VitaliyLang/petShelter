import React, { Component } from 'react';
import './ModalBox.scss';
import { Button, Input } from 'react-materialize';

export default class ModalBox extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.click = this.click.bind(this);
        this.state = {
            showNotification: false
        }
    }
    submit(e) {
        e.preventDefault();
        let key = this.props.params.animalID;
        let category = this.props.params.categID.toLowerCase();
        this.props.adopt(key, category, false);
        let user = {
            name: this.name.state.value,
            email: this.email.state.value,
            tel: this.tel.state.value,
            animalID: key,
            category,
            type: 'get'
        };
        this.props.signUp(user);
        this.setState({
            showNotification: true
        })
    }
    click(){
        this.setState({
            showNotification: false
        })
        this.props.click();
        let link = `/animals/${this.props.params.categID.toLowerCase()}/${this.props.params.animalID}`;
        this.props.onGetAnimals(link);
    }
    render() {
        if (!this.props.show) {
            return null;
        }
        let content;
        if (this.state.showNotification) {
            content = <div className='modal_form'>
                        <h1 className = 'message1'>Thanks a lot for trusting!
                    Our manager will call you back soon.</h1>
                        <Button onClick = {this.click} className=" btn waves-effect waves-light"> Okey </Button>
                    </div>
        } else {
            content =
                <form className='modal_form' onSubmit={this.submit}>
                    <Input label="Name" validate={true} required minLength='3' ref={(input) => this.name = input} />
                    <Input type="email" label="Email" validate={true} required ref={(input) => this.email = input} />
                    <Input type="tel" maxLength = '10' validate={true} label="Phone: (0XX)XXXXXXX" required pattern="(\()?[0-9]{3}(\))?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}" ref={(input) => this.tel = input} />
                    <div>
                        <Button type="submit" className=" btn waves-effect waves-light"> Apply </Button>
                        <Button onClick={this.props.click} className=" btn waves-effect waves-light"> Cancel </Button>
                    </div>
                </form>

        }
        return (
            <div className='modal_box_adopt'>
                {content}
            </div>
        );
    }
}