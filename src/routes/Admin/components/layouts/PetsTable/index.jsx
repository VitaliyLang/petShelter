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
		

		var returnedData = [];
		function returnPetRow(dataFromPetRow)  {
      	// sendPetToUpdate(dataFromPetRow);
      	// console.log('data from row', dataFromPetRow);
     //  	for (item in dataFromPetRow) {
					// returnedData.push(dataFromPetRow[item]);
     //  	}
     returnedData.push(dataFromPetRow);
      				
    		console.log("ret",returnedData);
    	// returnedData.map((item,i) => console.log(i, item.age) );
    }

		render(){
			
			//ALL PETS IN ARRAY 
			//making pets from all categories set in one array

			var animals = this.props.allAnimals.animals; //data from response
			
			var unsortedAnimals =[];
			console.log("animals",animals);
				
			for (var item in animals) { 
				unsortedAnimals.push(animals[item]);
			}
		
			console.log("unsort", unsortedAnimals);
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
			console.log("sorted ", sortedAnimals);
			// END - ALL PETS IN ARRAY  

			
			//RETURN PET ROW TO SET IN FILTER
			
    	// console.log("ret",returnedData);
    	//END



				// this.props.updatePet("-KuKJtcxmqqmfW-OCxw-","dog",{
				// 	active: true,
 			// 		age: "adult",
 			// 		alias: "Jack",
 			// 		category: "dog",
 			// 		sex: "female",
 			// 		size: "small",
 			// 		url: "http://cdn3-www.dogtime.com/assets/uploads/gall...",
				// 	vaccinations:true
				// })
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
							{returnedData.map((item,i) =><EditFilter item={item} key={i} /> )}

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
		updatePet: (animalKey,category,animalObj) => dispatch(updateAnimal(animalKey,category,animalObj))
	})
)(PetsTable)



//        