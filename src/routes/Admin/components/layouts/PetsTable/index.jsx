import React from 'react'
import { connect } from 'react-redux';
import getAnimals from '../../../../../store/actions/animals';

class PetsTable extends React.Component {
    constructor(props) {
    super(props);
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
						<h5>here will be some values</h5>
				     		
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
