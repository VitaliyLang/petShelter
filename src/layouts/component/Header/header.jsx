import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import '../../../styles/main.scss';
import './header.scss';
import { SideNav, SideNavItem } from 'react-materialize';
import Logo from './petLogo.png';
import modalAdopt from 'store/actions/modalAdopt';
import debounce from 'modules/helpers/debounce'

class Header extends React.Component{
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
        this.resize = this.resize.bind(this);
        this.debounceResize = debounce(this.resize, 300);
    };
    resize(){
      this.forceUpdate();
    }
    componentDidMount () {
        window.addEventListener('resize', this.debounceResize)
      }
    componentWillUnmount () {
        window.removeEventListener('resize', this.debounceResize)
    }
    onClick(){
        this.props.showModal(true);
    }
    render() {
        let show = this.props.params.categID && Object.keys(this.props.params).length == 1;
        var Filter;
        var Connection;

        if(window.innerWidth < 500 && show){
            Filter = <li className = "filter_btn" onClick = {this.onClick}><Link to = ''><img src = "http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Filter-icon.png" width="15"/>Filter</Link></li>
        }else{
            Filter = null;
        }

        if (!navigator.onLine) {
            Connection = <div className='right connection'><i className='material-icons'>signal_wifi_off</i></div>
        } else {
            Connection = null;
        }
        return (
            <div className='navbar-fixed'>
                <nav className = 'main-layout-header'>
                    <div className='nav-wrapper'>
                        <Link to='/' className='brand-logo'>
                            <img src={Logo} alt='logo'/>
                        </Link>
                        {Filter}
                        {Connection}

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
                            <li><Link to='/categories'>Categories</Link></li>
                        </SideNav>

                    <ul className='right hide-on-med-and-down'>
                        <li><Link activeClassName='active' to='/contacts'>Contacts</Link></li>
                        <li><Link activeClassName='active' to='/about'>About</Link></li>
                        <li><Link activeClassName='active' to='/partners'>Partners</Link></li>
                        <li><Link  to='/categories'>Categories</Link></li>
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
