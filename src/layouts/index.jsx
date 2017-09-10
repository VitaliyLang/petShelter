import React from 'react'
import Header from './component/Header/header'

class StaticLayout extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
            <Header/>
            {this.props.children}
            </div>
        );
    }
}

export default StaticLayout
