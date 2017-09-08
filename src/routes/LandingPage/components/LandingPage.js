import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import './LandingPage.scss'
import giveDog from '../assets/giveDog.jpg'
import takeDog from '../assets/takeDog.jpg'

export const LandingPage = () => (
    <div className = "container">
            <Link to='/' activeClassName='page-layout__nav-item--active'>
                <img src = {takeDog} alt="TakeDog" className="takeDog"/>
            </Link>

            <Link to='/categories' activeClassName='page-layout__nav-item--active'>
                <img src = {giveDog} alt="GiveDog" className="giveDog"/>
            </Link>
    </div>
)


export default LandingPage
