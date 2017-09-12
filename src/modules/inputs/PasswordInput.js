import React from 'react'
import './inputs.scss'

class PasswordInput extends React.Component {
	render() {
		return(
			<input type="password" placeholder="Pass" className='form_input' />
		)
	}
}

export default PasswordInput