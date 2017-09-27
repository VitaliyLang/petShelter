import React, {Component} from 'react';
import './ModalBox.scss';

export default class ModalBox extends Component{
    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <div className = 'modal_box_adopt'>
                
                <button onClick={this.props.click}>Yes</button>
            </div>
            
        )
    }
}