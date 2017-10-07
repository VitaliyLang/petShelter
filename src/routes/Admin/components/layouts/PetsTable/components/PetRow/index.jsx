import React from 'react'
import './styles.scss'
import { connect } from 'react-redux';
import findAnimal from 'store/actions/findAnimal';
import removeAnimal from 'store/actions/removeAnimal';
class PetRow extends React.Component {
		constructor(props) {
				super(props);
				
		}

		getRow(e) {
			var objKey = e.target.getAttribute('data-key');
			this.findClickedObj(objKey);
			this.props.show();
			}

		findClickedObj(key) {
		var myArr = this.props.petsArr;

		for (var i = 0; i < myArr.length; i++){
			if (myArr[i].key == key) {
				this.props.findAnimal(myArr[i]);
			}
		} 
	}
	
	findPetToDel(e){
		console.log(e.target.getAttribute('data-key'));
		var myKey = e.target.getAttribute('data-key');
		console.log(this.props.petsArr);
		var allPets = this.props.petsArr;
		for (var i = 0; i < allPets.length; i++){
			if (allPets[i].key == myKey) {
				console.log("this el",allPets[i].category);
				var petCategory = allPets[i].category;
				var petKey = allPets[i].key;
				this.props.onRemoveAnimal('dog','-456-');
				console.log("arr after remove",this.props.petsArr);
			}
		}
	}

		render(){
			console.log("myStore",this.props.AnimalStore);
				return(
						<div className="pet_row">
								<div className="rowItem">{this.props.item.category}</div>
								<div className="rowItem">{this.props.item.alias}</div>
								<div className="rowItem">{this.props.item.age}</div>
								<div className="rowItem">{this.props.item.size}</div>
								<div className="rowItem">{this.props.item.sex}</div>
								<div className="rowItem ">{String(this.props.item.active)}</div>
								<div className="rowItem img">
										<img className="img" src= {this.props.item.url} alt=""/>
								</div>
								<div className="rowItem ">								
									<i className="material-icons table_btn"
										data-key={this.props.item.key}
										onClick={this.getRow.bind(this)}>
										edit
									</i>
									<i className="material-icons table_btn"
										data-key={this.props.item.key}
										onClick={this.findPetToDel.bind(this)}>	
										delete_forever
									</i>
								</div>
								
						</div>    
				)
		}
}

// export default PetRow


export default connect(
	state => ({
		AnimalStore: state.oneAnimal,
	}),
	dispatch => ({
		findAnimal: (animalObject) => dispatch(findAnimal(animalObject)),
		onRemoveAnimal: (category, animalKey) => dispatch(removeAnimal(category, animalKey))
	})
)(PetRow)