import React from 'react'
import NavigationPanel from './components/layouts/NavigationPanel'
import MainSection from './components/layouts/MainSection'
import Routing from './routing.js'
import './styles.scss'

class Admin extends React.Component {
    constructor(props){
        super(props)
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

export default Admin
