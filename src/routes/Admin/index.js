import React from 'react'
import NavigationPanel from './components/layouts/NavigationPanel'
import MainSection from './components/layouts/MainSection'
import Routing from './routing.js'
import './styles.scss'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

class Admin extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.firebase.auth().onAuthStateChanged((user) => {
            if (user) {
             console.log('signedIn', user.uid)
            }else{
                alert('You are not authorization')
                this.props.router.push('/login');  
            }
        });
    }

    render(){
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
  
const wrappedAdmin = firebaseConnect()(Admin)
  
export default connect()(wrappedAdmin)
