import React from 'react'
import Formsy from 'formsy-react';
import MainInput from 'modules/inputs/MainInput'
import './FormToAdmin.scss'
import { connect } from 'react-redux'
import { addPerson } from '../../../store/actions'


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
    addPerson(personInformation){
      this.props.onAddPerson(personInformation);
      console.log(this.props);
    },
		render() {
			return (
				<div className="admin_form_wrapper">
				<div className="admin_form">
					<Formsy.Form  className="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
						<MainInput name="email" type="email" validations="isEmail" placeholder="email" validations={{minLength: 7}} validationError="This is not a valid email" required/>
						<MainInput name="name" type="text" placeholder="Name" validations={{minLength: 3}} validationError="Name should contain more than 2 letters" required/>
						<MainInput name="phoneNumber" type="number" placeholder="Phone number" validations={{minLength: 10}} validationError="Phone number should looks like: 0XX XXX XX XX" required/>	
						<button  type="submit" disabled={!this.state.canSubmit}>Submit</button>
					</Formsy.Form>
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
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormToAdmin);

