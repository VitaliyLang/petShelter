import React from 'react'
import './styles.scss'


class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <main>
                {this.props.children}
            </main>
        )
    }
}

export default MainSection
