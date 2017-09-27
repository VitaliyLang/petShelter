import React from 'react'
import { connect } from 'react-redux';
import Button from 'modules/buttons/PrimaryButton';
import uploadPhoto from '../../../../../store/actions/uploadPhoto'
import FileInput from 'react-file-input';
import PetsTable from '../../layouts/PetsTable';

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let photo = e.target.files[0];
        this.props.onUploadPhoto(photo,'dog','-KupDqW5nCMTBujGEZVh')
    }

    render(){
        return(
            <div>
	            <p>There will be such information: how many messages are active</p>
	            <PetsTable />
	          </div>
        )
    }
}

//export default Dashboard
let mapStateToProps = (state) => {
    return {
      uploadPhoto: state.uploadPhoto
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
      onUploadPhoto: (file,category,id) => dispatch(uploadPhoto(file,category,id))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)