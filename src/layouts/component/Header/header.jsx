import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import '../../../styles/main.scss';
import './header.scss';
import { SideNav, SideNavItem } from 'react-materialize';

class Header extends React.Component{
    render() {
        return (
                <nav className = "main-layout-header">
                    <div className="nav-wrapper">
                        <Link to='/' className="brand-logo">
                            <img src={require('./petLogo.png')} alt='logo'/>
                        </Link>
                        
                        <SideNav
                    	trigger={
                            <div className="button-colapse">
                                <i className="material-icons">menu</i>
                            </div>
                        }
                    	options={
                            { closeOnClick: true,
                             menuWidth: 250 }
                         }
                    	>
                        	<SideNavItem href='/'>
                                <img className="sidenav-logo" src={require('./petLogo.png')} alt='logo'/>
                            </SideNavItem>
                            <SideNavItem divider />
                        	<SideNavItem href='/contacts'>Contacts</SideNavItem>
                            <SideNavItem href='/about'>About</SideNavItem>
                            <SideNavItem href='/partners'>Partners</SideNavItem>
                        </SideNav>

                    <ul className="right hide-on-med-and-down">
                        <li><Link activeClassName="active" to='/contacts'>Contacts</Link></li>
                        <li><Link activeClassName="active" to='/about'>About</Link></li>
                        <li><Link activeClassName="active" to='/partners'>Partners</Link></li>
                    </ul>
                    </div>
                </nav>
        );
    }
}

export default Header;
