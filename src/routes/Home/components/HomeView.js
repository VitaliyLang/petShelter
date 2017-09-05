import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className="duck_wrapper">
    <h4>Welcome!</h4>
    <input type="text" className='inputik'></input>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView
