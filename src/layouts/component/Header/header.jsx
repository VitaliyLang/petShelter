import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import '../../../styles/main.scss';
import './header.scss';
import { SideNav, SideNavItem } from 'react-materialize';
import Logo from './petLogo.png';
import modalAdopt from 'store/actions/modalAdopt';

class Header extends React.Component{
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler(){
      this.forceUpdate();
    }
    componentDidMount () {
        window.addEventListener('resize', this.forceUpdateHandler)
      }
    componentWillUnmount () {
        window.removeEventListener('resize', this.forceUpdateHandler)
    }
    onClick(){
        this.props.showModal(true);
    }
    render() {
        var Filter;
        if(window.innerWidth < 500){
            Filter = <li onClick = {this.onClick}><Link to = ''><img src = "http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Filter-icon.png" width="15"/>Filter</Link></li>
        }else{
            Filter = null;
        }
        return (
            <div className='navbar-fixed'>
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
                            {Filter}
                        </SideNav>

                    <ul className='right hide-on-med-and-down'>
                        <li><Link activeClassName='active' to='/contacts'>Contacts</Link></li>
                        <li><Link activeClassName='active' to='/about'>About</Link></li>
                        <li><Link activeClassName='active' to='/partners'>Partners</Link></li>
                        {Filter}
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        showModal: (bool) => dispatch(modalAdopt(bool))
    })
)(Header)
