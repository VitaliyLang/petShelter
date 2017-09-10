import React from 'react'
import {Link} from 'react-router'
import './styles.scss'



class NavigationPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section className='navigationPanelContainer'>
                <ul className='adminMenu'>
                    <li>
                        <Link className="links" to={'/admin/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link className="links" to={'/admin/messages'}>Messages</Link>
                        <ul className='adminSubmenu'>
                            <li>
                                <Link className="links" to={'/admin/messages/give'}>Give Pet</Link>
                            </li>
                            <li>
                                <Link className="links" to={'/admin/messages/take'}>Take Pet</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="links" to={'/admin/animals'}>Animals</Link>
                        <ul className='adminSubmenu'>
                            <li>
                                <Link className="links" to={'/admin/animals/cats'}>Cats</Link>
                            </li>
                            <li>
                                <Link className="links" to={'/admin/animals/dogs'}>Dogs</Link>
                            </li>
                            <li>
                                <Link className="links" to={'/admin/animals/others'}>Others</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
           </section>
           
        )
    }
}

export default NavigationPanel
