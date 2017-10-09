import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import './FormToAdmin.scss'
import { connect } from 'react-redux'
import signup from 'store/actions/signup'
import { Button, Input } from 'react-materialize';

class FormToAdmin extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state ={
      show: false
    }
  }
  submit(e) {
    e.preventDefault();
    if(this.name){
      let obj = {
        name: this.name.state.value,
        email: this.email.state.value,
        tel: this.tel.state.value,
        type: 'give'
      }
      this.props.signup(obj);
    }
    this.setState((prevState)=>({
      show: !prevState.show
    }))
  }
  render() {
    let content, Btn, message;
    if (!navigator.onLine) {
        Btn = <Button type="submit" className=" btn waves-effect waves-light disabled"> Apply </Button>
        message = <p className = 'red-text text-darken-3'>
            Please connect to the internet
        </p>
    } else {
        Btn = <Button type="submit" className=" btn waves-effect waves-light"> Apply </Button>
        message = null;
    }

    if(this.props.sign.signUp && this.state.show){
      content = <div className = "notification">
                  <h1 className = 'message1'>Thanks a lot for trusting!
                    Our manager will call you back soon.
                  </h1>
                  <Button type="submit" className=" btn waves-effect waves-light"> Okey </Button>
                </div>
    }else{
      content =
        <div>
          <h1 className = 'message1'>Entrust your pet to us</h1>
          <Input label="Name" validate={true} autoComplete = {false} required minLength='3' size="10" ref={(input) => this.name = input} />
          <Input type="email" label="Email" autoComplete = {false} validate={true} required ref={(input) => this.email = input} />
          <Input type="tel" validate={true} autoComplete = {false} label="Phone: (0XX)XXXXXXX" required pattern="(\()?[0-9]{3}(\))?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}" ref={(input) => this.tel = input} />

          {Btn}
          {message}
        </div>
    }
    return (
      <div className="formTo">
        <form className='modal_form' onSubmit={this.submit} onReset = {this.reset}>
          {content}
        </form>
      </div>
    );
  }
}



export default connect(
  state=>({
    sign: state.signup
  }),
  dispatch=>({
    signup: (obj)=>dispatch(signup(obj))
  })
)(FormToAdmin)
