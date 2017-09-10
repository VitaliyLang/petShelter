import React from 'react'
import Form from 'modules/form/'
import EmailInput from 'modules/inputs/EmailInput'
import PasswordInput from 'modules/inputs/PasswordInput'
import PhoneInput from 'modules/inputs/PhoneInput'
import PrimaryButton from 'modules/buttons/PrimaryButton'

class FormToAdmin extends React.Component {
	constructor(props){
     super(props)
    }
    render(props){
        return(
        	<div>
            <Form className="form">
              <h3>Sample Logo</h3>
              <p>You need just 30 seconds to enjoy your mobile workforce. Just tell us:</p>
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



