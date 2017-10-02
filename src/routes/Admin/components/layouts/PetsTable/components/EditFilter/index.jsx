import React from 'react'
import './styles.scss'
import {connect} from "react-redux"


class EditFilter extends React.Component {
		constructor(props) {
				super(props);
				
		}
		
		
		render(){
			if (Object.keys(this.props.AnimalStore).length  == 0) {
				return null; 
			}
			else {
				 console.log("in edit",this.props.AnimalStore.animal);
						return(
					<div className="petEditor">
						<input type="text" defaultValue={this.props.AnimalStore.animal.category}/>
						<input type="text" value={this.props.AnimalStore.animal.alias}/>
						<input type="text" value={this.props.AnimalStore.animal.age}/>
						<input type="text" value={this.props.AnimalStore.animal.size} />
						<input type="text" value={this.props.AnimalStore.animal.sex}/>
						<input type="text" value={this.props.AnimalStore.animal.active}/>
						<input type="text" />
					</div>
				)
		}
	}
}
//{this.props.AnimalStore.age}		

// export default EditFilter


export default connect(
	state => ({
		AnimalStore: state.oneAnimal,
	}),
	dispatch => ({})
)(EditFilter)

// <div className="">{this.props.item.age}</div>