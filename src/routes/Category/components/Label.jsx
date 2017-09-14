import React, {Component} from 'react'

class Label extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <label>
                <input type = 'radio' name = {this.props.name} value = {this.props.value} defaultChecked = {this.props.checked ? true : false} />
                {this.props.value}
            </label>
        )
    }
}

export default Label