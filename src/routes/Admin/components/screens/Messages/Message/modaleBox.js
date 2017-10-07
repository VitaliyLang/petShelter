import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';

export default class ModalBox extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.clickOk = this.clickOk.bind(this);
        this.state = {
            show:true
        };
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
            type: 'give'
        };
        this.props.signUp(user);
        this.setState({
            showNotification: true
        })
    }
    clickOk(){
        this.props.showChange();
        this.props.onGiveOrders(
            this.props.userKey
        );
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        let content;
        if (this.props.showWarn) {
            content = <div className='modal_form'>
                        <h1 className = 'message1'>The order will be removed!
                    Are you sure?</h1>
                        <Button onClick = {this.clickOk} className=" btn waves-effect waves-light"> Okey </Button>
                    </div>
        //} else if(this.state.showNotification){

        }else{
            content =
                <form className='modal_form' onSubmit={this.submit}>
                    <Input label="Name" validate={true} required minLength='3' size="10" ref={(input) => this.name = input} />
                    <Input type="email" label="Email" validate={true} required ref={(input) => this.email = input} />
                    <Input type="tel" validate={true} label="Phone: (0XX)XXXXXXX" required pattern="(\()?[0-9]{3}(\))?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}" ref={(input) => this.tel = input} />
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