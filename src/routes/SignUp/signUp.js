import React from 'react'
import Formsy from 'formsy-react';
import MainInput from 'modules/inputs/MainInput'
import { connect } from 'react-redux'
import { firebaseConnect, helpers,dataToJS } from 'react-redux-firebase'
import { addPerson} from '../../store/actions'
import Button from 'modules/buttons/PrimaryButton'
import {createNewUser} from '../../components/fireBase'
// import 'modules/inputs/inputs.scss'

	const FormToAdmin = React.createClass({
		getInitialState() {
			return {
				canSubmit: false
			}
		},
		enableButton() {
			this.setState({
				canSubmit: true
			});
		},
		disableButton() {
			this.setState({
				canSubmit: false
			});
		},
		submit(model) {
      this.addPerson(model);
        },
        ////////////////////////////////////////////////////
		
    addPerson(personInformation){
			this.props.onAddPerson(personInformation);
			createNewUser(this.props,personInformation);
		},
		render() {
			return (
				<div className="admin_form_wrapper main_section">
				<div className="admin_form">
					<div className='form_box'>
						
						<Formsy.Form  className="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
							<MainInput name="email" type="email" validations="isEmail" placeholder="email"  validationError="This is not a valid email" required/>
							<MainInput name="username" type="text" placeholder="Name" validations={{minLength: 6}} validationError="Name should contain more than 6 letters" required/>
							<MainInput name="password" type="password" placeholder="Password" required/>
							<MainInput name="phoneNumber" type="number" placeholder="Phone number" validations={{minLength: 10}} validationError="Phone number should looks like: 0XX XXX XX XX" required/>	
							<Button  type="submit">Submit</Button>
						</Formsy.Form>
					</div>
				</div>
				</div>
			);
		}
  });


//it is only mapStateToProps example for us
const mapStateToProps = state => {
  return {
		people: console.log(state.people)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: personInformation => {
      dispatch(addPerson(personInformation))
		}
  }
}

/*export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormToAdmin);*/

const wrappedFormToAdmin = firebaseConnect()(FormToAdmin)

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(wrappedFormToAdmin)
