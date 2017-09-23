import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import modifyL from '../../../store/actions/category/modifyList'
import {ReadItem} from '../../../components/fireBase'

class Category extends React.Component {
  constructor (props) {
    super(props)
  }

    categorClick(e) {
        e.preventDefault();
        let link = '/animals/'+e.target.id, onlyKey = true, annArr = [];
        let {onGetAnimals} = this.props;
        onGetAnimals(link);
        //annArr = ReadItem(snapshot.val(),onlyKey);
        //this.props.modifyList(annArr);
    }

    render(){
        let data = this.props.category,
            categorClick = this.categorClick.bind(this);
        return(
            <div onClick={categorClick}>
                <Link to={'/categories/'+data} id={data.toLowerCase()}>{data}</Link>
            </div>
        )
    }
}

export default Category