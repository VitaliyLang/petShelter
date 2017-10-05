import React from 'react';
import './About.scss';
import dog_about from '../assets/dog_about.jpg';
import cat_about from '../assets/cat_about.jpg';

class About extends React.Component{
    render() {
        return (
            <div className= 'about_wrapper'>
                <h1>What we do?</h1>
                <h2>We give a home for homeless, and here you can find a new friend.</h2>

                <div className="about_container">
                    <div className="about_first_info">
                        <img src={dog_about} alt="dog"/>
                        <h5>Take a new friend</h5>
                        <p>Here you can find yours best friend. Just choose one from list which you like and create a new strong friendship. We will give you tips for adopting your new friend. If you some help, just call us, we will help you find a new friend.</p>
                    </div>
                    <div className="about_first_info">
                        <img src={cat_about} alt="dog"/>
                        <h5>Home for homeless</h5>
                        <p>As soon as a pet arrives at our facility, our staff begins searching for the perfect match - a family who is just right and will give the pet a wonderful home. While waiting for a forever home, our dogs and cats receive the best of care.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default About
