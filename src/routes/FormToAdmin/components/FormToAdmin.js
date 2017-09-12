import React from 'react'
import Form from 'modules/form/'
import EmailInput from 'modules/inputs/EmailInput'
import PasswordInput from 'modules/inputs/PasswordInput'
import PhoneInput from 'modules/inputs/PhoneInput'
import PrimaryButton from 'modules/buttons/PrimaryButton'
import './FormToAdmin.scss'

class FormToAdmin extends React.Component {
	constructor(props){
     super(props)
    }
    render(props){
        return(
        	<div className="admin_form">
            <Form >
              <h3 className="form_header">Sample Logo</h3>
              <p className="form_text">You need just 30 seconds to enjoy your mobile workforce. Just tell us:</p>
              <EmailInput />
              <PasswordInput />
              <PhoneInput />
              <PrimaryButton>Send request</PrimaryButton>
            </Form>
          </div>
        )
    }
}

export default FormToAdmin



