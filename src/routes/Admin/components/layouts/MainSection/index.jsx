import React from 'react'
import './styles.scss'


class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <main className="main background">
                <div className="layer">
                    {this.props.children}
                </div>
            </main>
        )
    }
}

export default MainSection
