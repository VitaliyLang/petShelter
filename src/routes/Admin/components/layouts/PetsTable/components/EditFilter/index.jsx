import React from 'react'
import './styles.scss'
import {connect} from "react-redux"
import updateAnimal from 'store/actions/updateAnimal';


class EditFilter extends React.Component {
		constructor(props) {
			super(props);
			// this.state = {
			// 	category : "",
			// 	nickname: "",
			// 	age: "",
			// 	sex: "",
			// 	size: "",
			// 	url: "",
			// 	key:"",
			// 	animalStore: {},
			// };	
			this.state = {
				category : this.props.animalStore.animal.category,
				nickname : this.props.animalStore.animal.alias,
				age : this.props.animalStore.animal.age,
				sex : this.props.animalStore.animal.sex,
				size : this.props.animalStore.animal.size,
				url: this.props.animalStore.animal.url,
				key: this.props.animalStore.animal.key,
				animalStore: {},
			}
			this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
		}

		// componentWillReceiveProps(nextState, nextProps) {
			
		// 	if (nextState.animalStore.animal && 
		// 			!this.state.animalStore.animal || this.state.animalStore.animal && 
		// 			nextState.animalStore.animal.key !== this.state.animalStore.animal.key ) {
				
		// 		this.setState( {
		// 				category: nextState.animalStore.animal.category,
		// 				nickname: nextState.animalStore.animal.alias,
		// 				age: nextState.animalStore.animal.age,
		// 				sex: nextState.animalStore.animal.sex,
		// 				size: nextState.animalStore.animal.size,
		// 				url: nextState.animalStore.animal.url,
		// 				key: nextState.animalStore.animal.key
		// 			 } )
		// 	}
		// }
		
		handleChange(param, event) {
	  	this.setState({
				[param]: event.target.value,
			});
	  }

 		handleSubmit(event) {
    		
    	
    	event.preventDefault();
    	   	
	this.updatePet(this.state.key,this.state.category);
  console.log("value after clicked submit",this.state);
   		// console.log('state in submit moment',this.state);
   		// document.querySelector('.petEditor').style.display = 'none';
			// document.querySelector('[data-key]').style.display = 'inline-block';
			// console.log("findAnimal state after sent",this.props.findAnimal);
			this.props.show();
  	}


		updatePet(key,category) {
			this.props.updatePet(key,category,{
 					category: this.state.category,
 					alias: this.state.nickname,
 					age: this.state.age,
 					size: this.state.size,
 					sex: this.state.sex,
					active: true,
 					url: this.state.url,
					vaccinations:true
			})
		}
		
		render(){
			if (Object.keys(this.props.animalStore).length  == 0) {
				return null; 
			}
			else {

					return(
					<div className="petEditor">
						<form onSubmit={this.handleSubmit.bind(this)}>
							<label>
								Category:
								<input type="text" value={this.state.category} onChange={this.handleChange.bind(this, "category")} key="1" />
							</label>
							<label >
								Nickname
								<input type="text" value={this.state.nickname} onChange={this.handleChange.bind(this, "nickname")} key="2" />
							</label>
							<label >
								Age:
								<input type="text" value={this.state.age} onChange={this.handleChange.bind(this, "age")} key="3" />
							</label>
							<label >
								Sex:
								<input type="text" value={this.state.sex} onChange={this.handleChange.bind(this, "sex")} key="4" />
							</label>
							<label >
								Size:
								<input type="text" value={this.state.size} onChange={this.handleChange.bind(this, "size")} key="5" />
							</label>
							<label >
								Image Url:
								<input type="text" value={this.state.url}  onChange={this.handleChange.bind(this, "url")} key="6" />
							</label>
							<input type="submit" value="Submit" className=''/>
						</form>		
					</div>
				)
		}
	}
}

export default connect(
	state => ({
		animalStore: state.oneAnimal,
	}),
	dispatch => ({
		updatePet: (animalKey,category,animalObj) => dispatch(updateAnimal(animalKey,category,animalObj)),
		// findAnimal: (animalObject) => dispatch(findAnimal(animalObject)),
	})
)(EditFilter)

// className='btn btn get waves-effect waves-light'
// onClick={this.props.onClick}