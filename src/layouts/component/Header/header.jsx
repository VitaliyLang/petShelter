import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import '../../../styles/main.scss';
import './header.scss';
import { SideNav, SideNavItem } from 'react-materialize';
import Logo from './petLogo.png';

class Header extends React.Component{
    render() {
        return (
                <nav className = 'main-layout-header'>
                    <div className='nav-wrapper'>
                        <Link to='/' className='brand-logo'>
                            <img src={Logo} alt='logo'/>
                        </Link>

                        <SideNav
                    	trigger={
                            <div className='button-colapse'>
                                <i className='material-icons'>menu</i>
                            </div>
                        }
                    	options={
                            { closeOnClick: true,
                             menuWidth: 250 }
                         }
                    	>
                        	<li>
                                <Link to='/'>
                                    <img className='sidenav-logo' src={Logo} alt='logo'/>
                                </Link>
                            </li>
                            <SideNavItem divider />
                            <li><Link to='/contacts'>Contacts</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/partners'>Partners</Link></li>
                        </SideNav>

                    <ul className='right hide-on-med-and-down'>
                        <li><Link activeClassName='active' to='/contacts'>Contacts</Link></li>
                        <li><Link activeClassName='active' to='/about'>About</Link></li>
                        <li><Link activeClassName='active' to='/partners'>Partners</Link></li>
                    </ul>
                    </div>
                </nav>
        );
    }
}

export default Header;
