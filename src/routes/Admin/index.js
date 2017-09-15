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
        console.log(this);
        let checked = this.props.isLogin.isLogin;
        if(!checked){
            alert('You are not authorization')
            this.props.router.push('/login');
        }
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
  
export default connect(
    state => ({isLogin: state.initLogin})
)(wrappedAdmin)
/*,
onLogin: checked => {
    dispatch(doLogin(checked))
}*/