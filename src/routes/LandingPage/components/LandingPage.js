import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './LandingPage.scss'
import { Slider } from 'react-materialize'
import { Slide } from 'react-materialize'
import Logo from '../../../layouts/component/Header/petLogo.png'
import cat from '../assets/first_cat.jpg'
import dog from '../assets/second_dog.jpg'
import parrot from '../assets/third_parrot.jpg'

export const LandingPage = () => (

  <div className='main_wrapper'>

    <div className='relocation_nav'>
      <Link to='/goes-shelter' activeClassName='page-layout__nav-item--active'>
            <h1 className='homeP' >Leave pet</h1>
      </Link>
      <Link to='/' className = "logo">
        <img src={Logo} className='main_page_logo' alt='logo' />
      </Link>
        <Link to='/categories' activeClassName='page-layout__nav-item--active'>
            <h1 className='homeP'>Adopt pet</h1>
        </Link>
    </div>

    <Slider className='slider' fullscreen indicators={false} interval={3000} >
      <Slide className='slide'
        src={cat}
        title='Pet Shelter welcome you!'
        placement='left'>

		</Slide>
      <Slide className='slide'
        title='Find your little friend.'
        src={dog}
        placement='right'>

		</Slide>
      <Slide className='slide'
        src={parrot}
        placement='left'
        title = 'We can accept your pet.'>
       
		</Slide>
    </Slider>

  </div>
)

export default LandingPage

//			Home for homeless , Place of new friendships.
//			It waits you!
//      It will be in safe hands with us!

