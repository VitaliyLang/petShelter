import React from 'react'
import Formsy from 'formsy-react'
import MainInput from 'modules/inputs/MainInput'
import './FormToAdmin.scss'
import { connect } from 'react-redux'
import { addPerson } from '../../../store/actions'
import signup from '../../../store/actions/signup'
import Button from 'modules/buttons/PrimaryButton'
// import 'modules/inputs/inputs.scss'

const FormToAdmin = React.createClass({
  getInitialState () {
    return {
      canSubmit: false
    }
  },
  enableButton () {
    this.setState({
      canSubmit: true

    })
  },
  disableButton () {
    this.setState({
      canSubmit: false
    })
  },
  submit (model) {
    this.addPerson(model)
  },

  addPerson (personInformation) {
    personInformation.password = String(Math.random()).slice(-8)
    personInformation.active = false
    personInformation.animalId = ''
    personInformation.type = 'give'
    personInformation.role = 'user'
    this.props.onAuth(personInformation)
			// this.props.onAddPerson(personInformation);
			// createNewUser(this.props,personInformation);
  },
  render () {
    return (
      <div className='admin_form_wrapper main_section'>
        <div className='admin_form'>
          <div className='form_box'>
            <h3>Form to admin</h3>
            <Formsy.Form className='form' onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <MainInput name='email' type='email' validations='isEmail' placeholder='email' validationError='This is not a valid email' required />
              <MainInput name='username' type='text' placeholder='Name' validations={{ minLength: 6 }} validationError='Name should contain more than 6 letters' required />
              <MainInput name='phoneNumber' type='number' placeholder='Phone number' validations={{ minLength: 10 }} validationError='Phone number should looks like: 0XX XXX XX XX' required />
              <Button disabled={!this.state.canSubmit}>Submit</Button>
            </Formsy.Form>
          </div>
        </div>
      </div>
    )
  }
})

// it is only mapStateToProps example for us
const mapStateToProps = state => {
  return {
    people: console.log(state.people)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: personInformation => {
      dispatch(addPerson(personInformation))
    },
    onAuth: personInformation => {
      dispatch(signup(personInformation))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormToAdmin)
