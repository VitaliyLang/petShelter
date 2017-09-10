import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import './header.scss'

class Header extends React.Component{
    render() {
        return (
            <header className="header">
                <nav>
                    <ul>
                        <li className = "logo"><Link to='/'>Logo</Link></li>
                        <li><Link activeClassName="active" to='/contacts'>Contacts</Link></li>
                        <li><Link activeClassName="active" to='/about'>About</Link></li>
                        <li><Link activeClassName="active" to='/partners'>Partners</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
