import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Icon} from 'react-materialize';
import logout from '../../../../../store/actions/logout';
import './styles.scss';



class NavigationPanel extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    logOut(){
        const {onLogout} = this.props;
        onLogout();
    }

    clickHandler(){
       this.logOut();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isLogout ){
            this.props.router.replace('/login');
        }
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
                    </li>
                </ul>
                <div className='logoutWrapper' onClick={this.clickHandler}>
                    <Icon className='logout' right={true} small >input</Icon>
                </div>
           </section>
        )
    }
}

export default connect(
    state => ({ isLogout: state.logout.isLogout }),
    dispatch => ({onLogout: () => dispatch(logout())})
  )(NavigationPanel)


                    // <li>
                    //     <Link className="links" to={'/admin/animals'}>Animals</Link>
                    //     <ul className='adminSubmenu'>
                    //         <li>
                    //             <Link className="links" to={'/admin/animals/cats'}>Cats</Link>
                    //         </li>
                    //         <li>
                    //             <Link className="links" to={'/admin/animals/dogs'}>Dogs</Link>
                    //         </li>
                    //         <li>
                    //             <Link className="links" to={'/admin/animals/others'}>Others</Link>
                    //         </li>
                    //     </ul>
                    // </li>