import React from 'react'
import { connect } from 'react-redux';
import getAnimals from '../../../../../store/actions/animals';

class PetsTable extends React.Component {
    constructor(props) {
    super(props);
 	}
		
    render(){
			var arr =[];
    	var animals = this.props.allAnimals.animals;
    	// console.log(animals.dog);
    	for (var item in animals) {
    		arr.push(item);
    	}
    	console.log(arr);
    	
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
