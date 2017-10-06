import React from 'react'
import './styles.scss'
import { connect } from 'react-redux';
import findAnimal from 'store/actions/findAnimal';
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

				// document.querySelector('.petEditor').style.display = 'block';
				// document.querySelector('[data-key]', key).style.display = 'none';

				this.props.findAnimal(myArr[i]);
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
									<button  onClick={this.getRow.bind(this)} data-key={this.props.item.key}>Edit</button>
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
		findAnimal: (animalObject) => dispatch(findAnimal(animalObject))
	})
)(PetRow)