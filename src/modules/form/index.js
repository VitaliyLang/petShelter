import React from 'react'
import FormLayout from './formLayout/FormLayout.js'


function Form(props) {
  return (
    <div>
					<FormLayout>
						{props.children}
					</FormLayout>
			
			</div>
			
  );
}
export default Form
