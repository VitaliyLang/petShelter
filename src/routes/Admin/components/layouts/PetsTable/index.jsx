import React from 'react'
import { connect } from 'react-redux';
import getAnimals from '../../../../../store/actions/animals';
import updateAnimal from '../../../../../store/actions/updateAnimal';
import PetRow from './components/PetRow';
import EditFilter from './components/EditFilter';

class PetsTable extends React.Component {
		constructor(props) {
		super(props);
			// this.state = {
				
			// }
		}

		render(){
			
			//ALL PETS IN ARRAY 
			//making pets from all categories set in one array

			var sortedAnimals = [this.props.allAnimals.animals]; //data from response


				
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
																									returnPetToUpdate={this.returnPetRow}
																								/>)}
						</div>
						<EditFilter isVisible={ false } />
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
		// oneAnimal: () => dispatch()
	})
)(PetsTable)



//        {returnedData.map((item,i) =><EditFilter item={item} key={i} /> )}
