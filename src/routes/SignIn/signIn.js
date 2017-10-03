import React from 'react'
import Formsy from 'formsy-react'
import MainInput from 'modules/inputs/MainInput'
import { connect } from 'react-redux'
import Button from 'modules/buttons/PrimaryButton'
import signin from '../../store/actions/signin'
import { signPerson } from '../../components/fireBase'
import login from '../../store/actions/login'
import 'modules/buttons/buttons.scss'
import 'modules/inputs/inputs.scss'
import './style.scss'

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
        /* let props = this.props,
            link = '/admin/dashboard/';
        let uid = signPerson(props,personInformation,link);
        uid.then(res => {
            if(res){
                this.props.router.push(link);
                return;
            }
        })
        .catch(err => alert(err.message));
        return */
    console.log('you loged')
        // browserHistory.push('/admin/dashboard');
    this.props.onLogin(personInformation)
  }

  componentDidMount () {
    this.props.onSignin()
  }

  render () {
    if (this.props.signin.isAdmin) {
      this.props.router.replace('/admin/dashboard')
    } else {
      return (
        <div className='form_wrapper'>
          <h2>Sign In</h2>
          <Formsy.Form className='form' onValidSubmit={this.logIn} onValid={this.enableButton}
            onInvalid={this.disableButton}>
            <MainInput name='email' type='email' validations='isEmail' placeholder='email'
              validations={{ minLength: 7 }} validationError='This is not a valid email' required />
            <MainInput name='password' type='password' placeholder='Password' required />
            <Button disabled={!this.state.canSubmit}>Sign in</Button>
          </Formsy.Form>
        </div>
      )
    }
  }
}

let mapStateToProps = (state) => {
  return {
    signin: state.signin
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
