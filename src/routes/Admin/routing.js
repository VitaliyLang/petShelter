import React from 'react'
import DashBoard from './components/screens/Dashboard/'
import Messages from './components/screens/Messages/'
import Animals from './components/screens/Animals/'

class Routing extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        let path = this.props.action
        switch(path) {
            case 'messages':
                return <Messages />
            case 'dashboard':
                return <DashBoard />
            case 'animals':
                return <Animals />
        }
    }
}

export default Routing

