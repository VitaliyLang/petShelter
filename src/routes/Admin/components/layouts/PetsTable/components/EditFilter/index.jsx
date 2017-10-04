import React from 'react'
import './styles.scss'
import {connect} from "react-redux"
import updateAnimal from 'store/actions/updateAnimal';

class EditFilter extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				category : "",
				nickname: "",
				age: "",
				sex: "",
				size: "",
				animalStore: {},
			};	
			this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
		}
		
		componentDidMount() {
			if (this.props.animalStore) {
			 // this.setState( {value : this.props.animalStore.animal.category } )
			}
		}

		componentWillReceiveProps(nextState, nextProps) {
			
			if (nextState.animalStore.animal && 
					!this.state.animalStore.animal || this.state.animalStore.animal && 
					nextState.animalStore.animal.key !== this.state.animalStore.animal.key ) {
				console.log(nextState.animalStore.animal.category);
				this.setState( {
												category: nextState.animalStore.animal.category,
												nickname: nextState.animalStore.animal.alias,
												age: nextState.animalStore.animal.age,
												sex: nextState.animalStore.animal.sex,
												size: nextState.animalStore.animal.size
											 } )
			}
			// if (nextState.animalStore.animal.category, this.state) {

			// }
		}
		
		handleChange(param, event) {
	  	this.setState({
	  									// [param]: event.target.alias
	  									nickname: event.target.alias
	  								});
	  	console.log("now i am editing:", this.state);
	  }

 		handleSubmit(event) {
    		
    	console.log("value after clicked submit",this.state);
    	event.preventDefault();
    	// this.updatePet(this.props.animalStore.animal.key,this.state.category);
    	// console.log("pet updated");
    	this.props.updatePet('-KuKJtcxmqqmfW-OCxw-','dog',{
      active:false,
       age: "baby",
       alias: "My Test1",
       category: "dog",
       sex: "female",
       size: "big",
       url: "http://cdn3-www.dogtime.com/assets/uploads/gall...",
       vaccinations:true
      });
   		console.log('nickname',this.state.alias);
  	}


		// updatePet(key,category) {
		// 	this.props.updatePet(key,category,{
 	// 				category: this.state.category,
 	// 				alias: this.state.alias,
 	// 				age: this.state.age,
 	// 				size: this.state.size,
 	// 				sex: this.state.sex,
		// 			active: true,
 	// 				url: "pornhub.com",
		// 			vaccinations:true
		// 	})
		// }
		
		render(){
			if (Object.keys(this.props.animalStore).length  == 0) {
				return null; 
			}
			else {
				 console.log("in edit", this.props.animalStore.animal.key);
						return(
					<div className="petEditor">
						<form onSubmit={this.handleSubmit}>
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
							<input type="submit" value="Submit" />
						</form>		
					</div>
				)
		}
	}
}
//{this.props.animalStore.age}		

// export default EditFilter


export default connect(
	state => ({
		animalStore: state.oneAnimal,
	}),
	dispatch => ({
		updatePet: (animalKey,category,animalObj) => dispatch(updateAnimal(animalKey,category,animalObj)),
	})
)(EditFilter)

