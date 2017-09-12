import React from 'react'
// import {Link} from 'react-router'
import './inputs.scss'



class EmailInput extends React.Component {
   
    render(){
        return(
          <input type='text' placeholder="email"  className='form_input email_input'/>
        )
    }
}

export default EmailInput
