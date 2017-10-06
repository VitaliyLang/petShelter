import React from 'react'
import { connect } from 'react-redux';
import getAnimals from '../../../../../store/actions/animals';
import updateAnimal from '../../../../../store/actions/updateAnimal';
import PetRow from './components/PetRow';
import EditFilter from './components/EditFilter';
import './components/EditFilter/styles.scss';

class PetsTable extends React.Component {
		constructor(props) {
		super(props);
			this.state = {
				showToogle: false	
			}
			this.show = this.show.bind(this);
		}
		
		show() {
			this.setState({showToogle : !this.state.showToogle});
			// console.log("toogle",this.state.showToogle);
		}
		render(){
			
			//ALL PETS IN ARRAY 
			//making pets from all categories set in one array

			var animals = this.props.allAnimals.animals; //data from response
			var unsortedAnimals =[];
				
			for (var item in animals) { 
				unsortedAnimals.push(animals[item]);
			}
		
			var sortedAnimals = [];
		
			for (item in unsortedAnimals) { // pushing every animal to one array
					
					var thisValues = Object.values(unsortedAnimals[item]);
					var thisKeys = Object.keys(unsortedAnimals[item]);
					
					for (var i = 0; i < thisValues.length; i++){
				
						var onePetObj = thisValues[i];
						onePetObj.key = thisKeys[i];//adding key of this object to the array of values
			
						sortedAnimals.push(onePetObj);
					}
			}
			// END - ALL PETS IN ARRAY  

			const {hide} = this.state;
			console.log("toogle",this.state.showToogle);
				return(
					<div>
						<div className="table">
							<h5>Shelter Pets</h5>
								<div className="pet_row header_row">
									<div className="rowItem head_row">Category</div>
									<div className="rowItem head_row">Nickname</div>
									<div className="rowItem head_row">Age</div>
									<div className="rowItem head_row">Size</div>
									<div className="rowItem head_row">Gender</div>
									<div className="rowItem head_row">Status</div>
									<div className="rowItem head_row">Photo</div>
									<div className="rowItem head_row">Actions</div>
								</div>
								{sortedAnimals.map((item,i) => <PetRow 
																									item={item}
																									petsArr={sortedAnimals}
																									img={item.url}
																									key={i}
																									show={this.show}
																								/>)}
						</div>
						{this.state.showToogle ?	<EditFilter isVisible={ false } show={this.show}/> : null}						
					</div>

				)
		}
}




export default connect(
	state => ({
		allAnimals:state.listAnimals,
	}),
	dispatch => ({
		onGetAnimals: () => dispatch(getAnimals()),
	})
)(PetsTable)



//        {returnedData.map((item,i) =><EditFilter item={item} key={i} /> )}
