import React from 'react'
import './styles.scss'


class EditFilter extends React.Component {
		constructor(props) {
				super(props);
				
		}
		
		
		render(){
			// console.log(this.props.item);
				return(
				<div className="petEditor">
					<div className="">{this.props.item.age}</div>
				</div>
				)
		}
}

export default EditFilter

// <input type="text"/>
// 					<input type="text"/>
// 					<input type="text"/>
// 					<input type="text"/>
// 					<input type="text"/>
// 					<input type="text"/>
// 					<input type="text"/>