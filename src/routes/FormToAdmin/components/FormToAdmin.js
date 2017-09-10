import React from 'react'
import Form from 'modules/form/'
import FormInput from 'modules/form/components/FormInput'

class FormToAdmin extends React.Component {
	constructor(props){
     super(props)
    }
    render(props){
        return(
        	<div>
            <Form>
              <FormInput />
            </Form>
          </div>
        )
    }
}

export default FormToAdmin



