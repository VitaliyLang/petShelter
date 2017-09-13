import React from 'react'
import './buttons.scss'



class PrimaryButton extends React.Component {
   
    render(props){
        return(
          <button type="submit" className="primaryBtn">Submit</button>
        )
    }
}

export default PrimaryButton
