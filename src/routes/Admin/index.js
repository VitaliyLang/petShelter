import React from 'react'
import NavigationPanel from './components/layouts/NavigationPanel'
import MainSection from './components/layouts/MainSection'
import Routing from './routing.js'
import './styles.scss'
import { connect } from 'react-redux'
import getMessages from '../../store/actions/messages'
import getAnimals from '../../store/actions/animals'

class Admin extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.onGetMessages('/users');
        this.props.onGetAnimals('/animals');
        /*const {firebase} = this.props;
        firebase.auth().onAuthStateChanged((user) => {
            let role = '';
            if (user) {
                firebase.database().ref('/users/'+user.uid).once('value').then((snapshot) => {
                    if(snapshot.val().role == 'admin'){
                        console.log('signedIn');
                    }else{
                        throw new Error('No permission')
                    }                    
                })
                .catch(err => {
                    alert('You are not authorization')
                    this.props.router.push('/login');  
                })
            }else{
                alert('You are not authorization')
                this.props.router.push('/login');  
            }
        });
        /*let {auth,profile} = this.props;
        if (!auth || !auth.uid) {
            console.log({ error: 'You must be Logged into Toggle Done' })
        }else{
            if(profile && profile.role != 'admin'){
                console.log({ error: 'Permission denided' })
            }else{
                console.log('signIN');
            }
        }*/
    }

   /* init({profile,auth}){
        if (!auth || !auth.uid) {
            console.log({ error: 'You must be Logged into Toggle Done' })
        }else{
            if(profile && profile.role != 'admin'){
                console.log({ error: 'Permission denided' })
            }else{
                console.log('signIN');
            }
        }
    }*/

    render(){
        //this.init(this.props);
        return(
            <div className="wrapper">
                
                <NavigationPanel />
                <MainSection>
                    <Routing action={this.props.params.action}  />
                </MainSection>
            </div>
        )
    }
}

//export default Admin
let mapStateToProps = (state) => {
  return {
    messages: state.messages,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onGetMessages: (link) => dispatch(getMessages(link)),
    onGetAnimals: (link) => dispatch(getAnimals(link))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
  