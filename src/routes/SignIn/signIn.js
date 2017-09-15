import React from 'react'
import Formsy from 'formsy-react';
import MainInput from 'modules/inputs/MainInput'
import { connect } from 'react-redux'
import { firebaseConnect,firebase, helpers,dataToJS } from 'react-redux-firebase'
import { signPerson } from '../../components/fireBase'


class signIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {canSubmit: false};
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    enableButton() {
        this.setState({
            canSubmit: true
        });
    }

    disableButton() {
        this.setState({
            canSubmit: false
        });
    }

    logIn(personInformation){
        let props = this.props,
            link = '/admin/dashboard/';
        let uid = signPerson(props,personInformation,link);
        uid.then(res => {
            if(res){
                this.props.router.push(link)
            }
        })
        .catch(err => alert(err.message));
    }

    render(){        
        return (
            <div className='form_wrapper'>
                <h2>Sign In</h2>
                <Formsy.Form  className="form" onValidSubmit={this.logIn} onValid={this.enableButton} onInvalid={this.disableButton}>		
					<MainInput name="email" type="email" validations="isEmail" placeholder="email" validations={{minLength: 7}} validationError="This is not a valid email" required/>
					<MainInput name="password" type="password" placeholder="Password" required/>	
					<button  type="submit" className='prim_btn' disabled={!this.state.canSubmit}>Sign In</button>
				</Formsy.Form>
            </div>
        )
    }
}

const wrappedsignIn = firebaseConnect()(signIn)

export default connect(
    state => ({firebase: state.firebase})
)(wrappedsignIn)