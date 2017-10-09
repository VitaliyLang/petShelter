import React from 'react'
import './styles.scss'
import {connect} from "react-redux"
import updateAnimal from 'store/actions/updateAnimal';


class EditFilter extends React.Component {
		constructor(props) {
			super(props);

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

		
		handleChange(param, event) {
	  	this.setState({
				[param]: event.target.value,
			});
	  }

 		handleSubmit(event) {	
	  	event.preventDefault();
	    	   	
			this.updatePet(this.state.key,this.state.category);
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
						<h6 className="header">Pet Editor</h6>
						<form onSubmit={this.handleSubmit.bind(this)}>
							<label>
								Category:
								<input type="text" value={this.state.category} onChange={this.handleChange.bind(this, "category")} key="1" />
							</label>
							<label >
								Nickname
								<input type="text" value={this.state.nickname} onChange={this.handleChange.bind(this, "nickname")} key="2" />
							</label>
							<label className="have_select">
								Age:
								<select value={this.state.age} onChange={this.handleChange.bind(this, "age")} key="3">
							    <option value='baby'>Baby</option>
							    <option value='young'>Young</option>
							    <option value='adult'>Adult</option>
							    <option value='senior'>Senior</option>
    						</select>
							</label>
							<label className="have_select">
								Sex:
								<select value={this.state.sex} onChange={this.handleChange.bind(this, "sex")} key="4">
							    <option value='male'>Male</option>
							    <option value='female'>Female</option>
    						</select>
							</label>
							<label className="have_select">
								Size:
								<select value={this.state.size} onChange={this.handleChange.bind(this, "size")} key="5">
							    <option value='small'>Small</option>
							    <option value='medium'>Medium</option>
							    <option value='large'>Large</option>
    						</select>
							</label>
							<div className="url_box">
								<label >
									Image Url:
									{this.state.url.map((number,index) => 
										<input type="text" value={this.state.url[index]}  onChange={this.handleChange.bind(this, "url")} key={index}  />
									)}
								</label>
								<div className="images">
									{this.state.url.map((number,index) => 
										<img className="img" src= {this.state.url[index]} alt="" key={index} />
								)}
								</div>
							</div>
							<div className="buttons_block">
								<input type="submit" value="Submit" className='submit btn get waves-effect waves-light'/>
								<button className="cancel btn get waves-effect waves-light" onClick={this.props.show}>Cancel</button>
							</div>
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

	})
)(EditFilter)
