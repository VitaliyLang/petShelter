import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import modifyL from '../../../store/actions/category/modifyList'
import {ReadItem} from '../../../components/fireBase'

const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

let link = '';

class Category extends React.Component {
  constructor (props) {
    super(props)
  }

    categorClick(e) {
        e.preventDefault();
        let link = 'animals/'+e.target.id, onlyKey = true, annArr = [];
        this.props.firebase.database().ref(link).once('value').then((snapshot) => {
          annArr = ReadItem(snapshot.val(),onlyKey);
          this.props.modifyList(annArr);
        })
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

//export default Category

  const wrappedCategory = firebaseConnect([
    '/'
]  )(Category)

  export default connect(
    ({firebase}) => ({
      animals: dataToJS(firebase, 'animals')
    }),
    dispatch=>({
      modifyList : (arr)=> dispatch(modifyL(arr))
    })
  )(wrappedCategory)