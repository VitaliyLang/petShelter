import React from 'react'
import {Button} from 'react-materialize'
import './buttons.scss'


class PrimaryButton extends React.Component {
   
    render(){
        return(
          <Button 
	          type="submit"  
	          waves='light' 
	          className="primaryBtn"
	          disabled={false || this.props.disabled}
	          >button</Button>
        )
    }
}

export default PrimaryButton


// import {Button, Icon} from 'react-materialize'

// <button type="submit" className="primaryBtn">Submit</button>