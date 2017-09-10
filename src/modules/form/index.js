import React from 'react'
import FormLayout from './formLayout/FormLayout.js'


class Form extends React.Component {

	render(children) {
		return(
			<div>
			<FormLayout />
			<div>
			{children}
			</div>
			</div>
			

		)
	}
}

export default Form


