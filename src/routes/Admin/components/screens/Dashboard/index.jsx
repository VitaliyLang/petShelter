import React from 'react'
import { connect } from 'react-redux';
import Button from 'modules/buttons/PrimaryButton';
import uploadPhoto from '../../../../../store/actions/uploadPhoto';
import updateAnimal from '../../../../../store/actions/updateAnimal';
import removeAnimal from '../../../../../store/actions/removeAnimal';
import giveOrders from '../../../../../store/actions/giveOrders';
import logout from '../../../../../store/actions/logout';
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

    componentWillMount(){
      //this.props.onUpdateAnimal('-KuoNRJ87ORaaFW7pcNS','fish',({age:'babby'}));
      //this.props.onRemoveAnimal('fish','-KupQ9oUf_VJX_p5GA5y');
      //this.props.onGiveOrders('S4wK8RM940OKEj0SPrBnq0YGiUN2');
      this.props.onLogout();
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
      onUploadPhoto: (file,category,id) => dispatch(uploadPhoto(file,category,id)),
      onUpdateAnimal: (key,category,obj) => dispatch(updateAnimal(key,category,obj)),
      onRemoveAnimal: (category,animalKey) => dispatch(removeAnimal(category,animalKey)),
      onGiveOrders: (userKey) => dispatch(giveOrders(userKey)),
      onLogout: () => dispatch(logout())
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)