import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './LandingPage.scss'
import goesHome from '../assets/goes_home.jpg'
import goesShelter from '../assets/goes_to_shelter.jpg'
import { Slider } from 'react-materialize'
import { Slide } from 'react-materialize'

export const LandingPage = () => (

  <div className='main_wrapper'>

    <div className='relocation_nav'>
      <Link to='/goes-shelter' activeClassName='page-layout__nav-item--active'>
            <h1 className='homeP' >Leave pet</h1>
      </Link>
      <Link to='/' className = "logo">
        <img src={require('../../../layouts/component/Header/petLogo.png')} className='main_page_logo' alt='logo' />
      </Link>
        <Link to='/categories' activeClassName='page-layout__nav-item--active'>
            <h1 className='homeP'>Adopt pet</h1>
        </Link>
    </div>

    <Slider className='slider' fullscreen indicators={false} interval={3000} >
      <Slide className='slide'
        src='http://www.ultrahdfreewallpapers.com/uploads/large/animals/cat-hd-wallpaper-0166.jpg'
        title='Pet Shelter welcome you!'
        placement='left'>

		</Slide>
      <Slide className='slide'
        src='https://daywallpaper.files.wordpress.com/2013/08/red-german-boxer-dog-portrait.jpg'
        title='Find your little friend.'
        placement='right'>

		</Slide>
      <Slide className='slide'
        src='https://www.newhdwallpapers.in/wp-content/uploads/2015/11/Cool-Parrot-HD-Wallpaper.jpg'
        title='We can accept your pet.'
        placement='left'>
		</Slide>
    </Slider>

  </div>
)

export default LandingPage

//			Home for homeless , Place of new friendships.
//			It waits you!
//      It will be in safe hands with us!

