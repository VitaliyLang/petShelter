import React from 'react'
import {Link} from 'react-router'
import './styles.scss'



class NavigationPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section className="navigationPanelContainer">
                <ul>
                    <li>
                        <Link className="links" to={'/admin/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link className="links" to={'/admin/messages'}>Messages</Link>
                    </li>
                    <li>
                        <Link className="links" to={'/admin/animals'}>Animals</Link>
                    </li>
                </ul>
           </section>
           
        )
    }
}

export default NavigationPanel
