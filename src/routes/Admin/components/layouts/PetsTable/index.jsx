import React from 'react'
import { connect } from 'react-redux';
import getAnimals from '../../../../../store/actions/animals';
import PetRow from './components/PetRow'
class PetsTable extends React.Component {
		constructor(props) {
		super(props);
			// this.state = {
			// 	sortedAnimals
			// }
		}
		
		render(){
		var animals = this.props.allAnimals.animals; //data from response
				var unsortedAnimals =[];
			console.log(animals);
			
				for (var item in animals) { 
				unsortedAnimals.push(animals[item]);
			}
		
				var sortedAnimals = [];
		
				for (item in unsortedAnimals) { // pushing every animal to one array
						var thisValues = Object.values(unsortedAnimals[item]);
						for (var i = 0; i < thisValues.length; i++){
								sortedAnimals.push(thisValues[i]);
						}         
				}
				console.log("sorted ", sortedAnimals);

				return(
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
							</div>
							{sortedAnimals.map((item,i) => <PetRow item={item} img={item.url} key={i} />)}
					</div>       
				)
		}
}


// export default PetsT able   

export default connect(
	state => ({
		allAnimals:state.listAnimals,
	}),
	dispatch => ({
		onGetAnimals: () => dispatch(getAnimals())
	})
)(PetsTable)
