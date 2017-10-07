import React from 'react'
import { connect } from 'react-redux'
import { Button, Input } from 'react-materialize';
import signin from '../../../store/actions/signin/index'
import login from '../../../store/actions/login/index'
import 'modules/buttons/buttons.scss'
import 'modules/inputs/inputs.scss'
import './signIn.scss'
import * as Materialize from 'materialize-css'

class signIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.logIn = this.logIn.bind(this)
  }

  enableButton () {
    this.setState({
      canSubmit: true
    })
  }

  disableButton () {
    this.setState({
      canSubmit: false
    })
  }

  logIn (e) {
    e.preventDefault()
    this.props.onLogin({
      email: this.email.state.value,
      password: this.password.state.value
    })
  }

  componentDidMount () {
    this.props.onSignin()
  }

  componentWillUpdate (nextProps) {
    if (nextProps.signin.isAdmin) {
      console.log(this.props)
      this.props.router.replace('/admin/dashboard')
    }

    if (nextProps.login.login === false && nextProps.login.error.length) {
      Materialize.toast('The password or email is incorrect!', 4000, 'success')
    }
  }

  render () {
    return (
      <div className='login_form'>
        <form ref='form' className='modal_form' onSubmit={this.logIn} onInvalid={this.disableButton}>
          <div>
            <h1 className='message1'>Sign In</h1>
            <Input ref={(input) => this.email = input} name='email' validate={true} type='email' label='Email' required />
            <Input ref={(input) => this.password = input} name='password' type='password' validate={true} label='Password' required/>
            <Button disabled={this.state.canSubmit}> Sign In </Button>
          </div
          >
        </form>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    signin: state.signin,
    login: state.login
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onLogin: ({ email, password }) => dispatch(login({ email, password })),
    onSignin: () => dispatch(signin())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signIn)
