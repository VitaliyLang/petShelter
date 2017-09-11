import React from "react"
import './inputs.scss'

class PhoneInput extends React.Component {
	render() {
		return (
			<input type="number" placeholder="Phone number" className='form_input'/>
		)
	}
}

export default PhoneInput