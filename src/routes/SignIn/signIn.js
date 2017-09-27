import React from 'react'
import Formsy from 'formsy-react';
import MainInput from 'modules/inputs/MainInput'
import { connect } from 'react-redux'
import Button from 'modules/buttons/PrimaryButton'
import { signPerson } from '../../components/fireBase'
import login from '../../store/actions/login'
import './style.scss'


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
        /*let props = this.props,
            link = '/admin/dashboard/';
        let uid = signPerson(props,personInformation,link);
        uid.then(res => {
            if(res){
                this.props.router.push(link);
                return;
            }
        })
        .catch(err => alert(err.message));
        return*/
        this.props.onLogin(personInformation);
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

let mapStateToProps = (state) => {
  return {
    categories: state.login
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onLogin: ({email, password}) => dispatch(login({email, password}))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signIn)