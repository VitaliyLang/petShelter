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
      <div className='goesShelter_box'>
        <Link className='wrap' to='/goes-shelter' activeClassName='page-layout__nav-item--active'>
          <div className='goesShelter' >
            <h1 className='homeP' >Goes Shelter</h1>
          </div>
        </Link>
      </div>
      <Link to='/'>
        <img src={Logo} className='main_page_logo' alt='logo' />
      </Link>
      <div className='goes_home_box'>
        <Link className='wrap' to='/categories' activeClassName='page-layout__nav-item--active'>
          <div className='goesHome'>
            <h1 className='homeP'>Goes Home</h1>
          </div>
        </Link>
      </div>
    </div>

    <Slider className='slider' fullscreen indicators={false} interval={3000} >
      <Slide className='slide'
        src={cat}
        title='Pet Shelter welcome you!'
        placement='left'>
			Home for homeless , Place of new friendships.
		</Slide>
      <Slide className='slide'
        src={dog}
        placement='right'>
			It waits you!
		</Slide>
      <Slide className='slide'
        src={parrot}
        placement='left'>
			It will be in safe hands with us!
		</Slide>
    </Slider>

  </div>
)

export default LandingPage
