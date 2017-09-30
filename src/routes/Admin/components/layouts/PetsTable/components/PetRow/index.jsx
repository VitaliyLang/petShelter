import React from 'react'
import './styles.scss'


class PetRow extends React.Component {
		constructor(props) {
				super(props);
				
		}

		render(){
				return(
						<div className="pet_row">
								<div className="rowItem">{this.props.item.category}</div>
								<div className="rowItem">{this.props.item.alias}</div>
								<div className="rowItem">{this.props.item.age}</div>
								<div className="rowItem">{this.props.item.size}</div>
								<div className="rowItem">{this.props.item.sex}</div>
								<div className="rowItem ">{this.props.item.active}</div>
								<div className="rowItem img">
										<img className="img" src={this.props.item.url} alt=""/>
								</div>
								
						</div>    
				)
		}
}

export default PetRow

