import React from 'react'
import './styles.scss'


class PetRow extends React.Component {
		constructor(props) {
				super(props);
				
		}

		getRow(e) {
			var objKey = e.target.getAttribute('data-key');
			// console.log(e.target.getAttribute('data-key'));
			this.findClickedObj(objKey);
		}

		findClickedObj(key) {
		console.log(key);
		console.log(this.props.petsArr);
		var myArr = this.props.petsArr;
		console.log(myArr);
		for (var i = 0; i < myArr.length; i++){
			if (myArr[i].key == key) {
				// console.log( myArr[i]);
				 return this.props.returnPetToUpdate(myArr[i]);					
			}
		} 

		
		}

		render(){
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
									<button onClick={this.getRow.bind(this)} data-key={this.props.item.key}>Edit</button>
								</div>
								
						</div>    
				)
		}
}

export default PetRow

