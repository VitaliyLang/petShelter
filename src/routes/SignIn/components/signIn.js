import React from 'react'
import Formsy from 'formsy-react'
import MainInput from 'modules/inputs/MainInput'
import { connect } from 'react-redux'
import Button from 'modules/buttons/PrimaryButton'
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
      <div className='form_wrapper main_section'>
        <div className='login_form'>
          <div className='form_box'>
            <h2>Sign In</h2>
            <Formsy.Form ref="form" className='form' onValidSubmit={this.logIn} onValid={this.enableButton}
                         onInvalid={this.disableButton}>
              <MainInput name='email' type='email' validations='isEmail' placeholder='email'
                         validations={{ minLength: 7 }} validationError='This is not a valid email' required />
              <MainInput name='password' type='password' placeholder='Password' required />
              <Button disabled={!this.state.canSubmit} label='Sign In' />
            </Formsy.Form>
          </div>
        </div>
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
