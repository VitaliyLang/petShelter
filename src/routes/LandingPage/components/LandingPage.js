import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import './LandingPage.scss'
import goesHome from '../assets/goes_home.jpg'
import goesShelter from '../assets/goes_to_shelter.jpg'
import {Slider} from 'react-materialize'
import {Slide} from 'react-materialize'

export const LandingPage = () => (


    <div className = "main_wrapper">
    				
    				
    				<div className="relocation_nav">
	          	<div className="goesShelter_box">
	            <Link  className="wrap" to='/goes-shelter' activeClassName='page-layout__nav-item--active'>
	            <div className='goesShelter' > 
			        		<h1 className='homeP' >goesShelter</h1>
				 				</div>
	 						</Link>           
	 						</div>
							
							<div className="goes_home_box">		    				
		          <Link className="wrap" to='/categories' activeClassName='page-layout__nav-item--active'>
		          	<div className='goesHome'>
		          			<h1 className='homeP'>goesHome</h1>
		          	</div>
		          	
			        </Link>
			        </div>

			      </div>   
			      <Slider className="slider" fullscreen indicators={false} interval={3000} >
                    <Slide className="slide"
                        src="https://www.hdwallpapers.in/walls/cute_kitten-wide.jpg"
                        title="Left aligned Caption"
                        placement="left">
                        Here's our small slogan.
                    </Slide>
                    <Slide className="slide"
                        src="https://daywallpaper.files.wordpress.com/2013/08/red-german-boxer-dog-portrait.jpg"
                        title="This is our big Tagline!"
                         placement="right">
                        Here's our small slogan.
                    </Slide>
                    <Slide className="slide"
                        src="http://www.baltana.com/files/wallpapers-6/Bunny-HD-Desktop-Wallpaper-19862.jpg"
                        title="Right aligned Caption"
                        placement="left">
                        Here's our small slogan.
                    </Slide>
                </Slider>  
   
  </div>
)



export default LandingPage

// <h2>Welcome to Pet Shelter</h2>
//     				<h3>Home for homeless , Place of new friendships</h3>