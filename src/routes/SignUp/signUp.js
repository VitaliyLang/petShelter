import React from 'react'
import Formsy from 'formsy-react';
import MainInput from 'modules/inputs/MainInput'
import { connect } from 'react-redux'
import { firebaseConnect, helpers,dataToJS } from 'react-redux-firebase'
import Button from 'modules/buttons/PrimaryButton'
import {createNewUser} from '../../components/fireBase'
// import 'modules/inputs/inputs.scss'

	const Animal = React.createClass({
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
      		this.addAnimal(model);
        },
        		
    addAnimal(animalInformation){
			let {category,sex,size,age} = animalInformation;
			let newPostKey = this.props.firebase.database().ref().child('animals').push().key;
			let updates = {};
			updates['/animals/'+category+'/'+newPostKey] = animalInformation;
			updates['categories/' + category] = category[0].toUpperCase() + category.slice(1);
			//updates['/animals/'+category+'/'+sex+'/'+size+'/'+age+'/'+newPostKey] = animalInformation;
			//updates['/users..../animalId'] = newPostKey;//adding animalId to UserTable;
			alert('Animal is added');
			return this.props.firebase.database().ref().update(updates)
		},
		render() {
			return (
				<div className="animal_form_wrapper main_section">
				<div className="animal_form">
					<div className='form_box'>						
						<Formsy.Form  className="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
							<MainInput name="category" type="text" placeholder="Category" required/>
							<MainInput name="sex" type="text" placeholder="Sex" required/>
							<MainInput name="size" type="text" placeholder="Size" required/>
							<MainInput name="age" type="text" placeholder="age" required/>
							<MainInput name="alias" type="text" placeholder="Alias" required/>
							<Button  type="submit">Submit</Button>
						</Formsy.Form>
					</div>
				</div>
				</div>
			);
		}
  });

	const wrappedAnimal = firebaseConnect(['/'])(Animal)
	export default connect(
		({firebase}) => ({
    		animals: dataToJS(firebase, 'animals')
  		})
	)(wrappedAnimal)
