import React from 'react'
import Formsy from 'formsy-react'
// import MainInput from 'modules/inputs/MainInput'
import { connect } from 'react-redux'
// import Button from 'modules/buttons/PrimaryButton'
import { Button, Input } from 'react-materialize';
import signin from '../../../store/actions/signin/index'
import login from '../../../store/actions/login/index'
import 'modules/buttons/buttons.scss'
import 'modules/inputs/inputs.scss'
import './signIn.scss'

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

  logIn (personInformation) {
    this.props.onLogin(personInformation)
  }

  componentDidMount () {
    this.props.onSignin()
  }

  componentWillUpdate (nextProps) {
    if (nextProps.signin.isAdmin) {
      this.props.router.replace('/admin/dashboard')
    }

    if (nextProps.login.login === false && nextProps.login.error.length) {
      this.refs.form.updateInputsWithError({
        password: 'The password or email is incorrect',
        // password: nextProps.login.error.substring
      })
    }
  }

  render () {
    return (
      <div className='login_form'>
        <Formsy.Form ref='form' className='modal_form' onValidSubmit={this.logIn} onValid={this.enableButton} onInvalid={this.disableButton}>
          <h1 className='message1'>Sign In</h1>
          <Input name='email' validate={true} validations={{ minLength: 7 }} type='email' label='Email' required />
          <Input name='password' type='password' validate={true} label='Password' required/>
          <Button disabled={this.state.canSubmit}> Sign In </Button>
        </Formsy.Form>
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
