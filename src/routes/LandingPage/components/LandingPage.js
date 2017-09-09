import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import './LandingPage.scss'
import goesHome from '../assets/goes_home.jpg'
import goesShelter from '../assets/goes_to_shelter.jpg'

export const LandingPage = () => (


    <div className = "container">
    				
    				<h2>Welcome to Pet Shelter</h2>
    				<h3>Home for homeless , Place of new friendships</h3>
    				

    				<div className="relocation_nav">
	          	<div className="goesShelter_box">
	            <Link  className="wrap" to='/' activeClassName='page-layout__nav-item--active'>
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
   
  </div>
)


export default LandingPage


// <img src = {goesShelter} alt="GiveDog" className="takeDog"/>
// <img src = {goesHome} alt="TakeDog" className="goesHome"/>