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
							<Link to='/'>
               	<img src={require('../../../layouts/component/Header/petLogo.png')} className='main_page_logo' alt='logo'/>
              </Link>
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
                        src="http://www.ultrahdfreewallpapers.com/uploads/large/animals/cat-hd-wallpaper-0166.jpg"
                        title="Pet Shelter welcome you!"
                        placement="left">
                        Home for homeless , Place of new friendships.
                    </Slide>
                    <Slide className="slide"
                        src="https://daywallpaper.files.wordpress.com/2013/08/red-german-boxer-dog-portrait.jpg"
                        title="Here you can find your best friend."
                         placement="right">
                        He waits you!
                    </Slide>
                    <Slide className="slide"
                        src="https://www.newhdwallpapers.in/wp-content/uploads/2015/11/Cool-Parrot-HD-Wallpaper.jpg"
                        title="We can accept your pet."
                        placement="left">
                        He will be in safe hands!
                    </Slide>
                </Slider>  
   
  </div>
)



export default LandingPage

// <h2>Welcome to Pet Shelter</h2>
//     				<h3>Home for homeless , Place of new friendships</h3>