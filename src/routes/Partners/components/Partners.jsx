import React from 'react';
import { Link } from 'react-router';
import './Partners.scss';
import happyDog from '../assets/happy_dog.png';
import kitekat from '../assets/kitekat.png';
import pedigree from '../assets/pedigree.png';
import chappi from '../assets/Chappi.png';
import whiskas from '../assets/whiskas.png';

class Partners extends React.Component{
    render() {
        return (
            <div className='partners_wrapper'>
                <div className='partners_container ver-scroll'>
                    <h4>Our thanks</h4>
                    <div className="partners_brands">
                        <Link to='/partners'> <img src={happyDog} alt="happyDog"/>  </Link>
                        <Link to='/partners'> <img src={kitekat} alt="kitekat"/> </Link>
                        <Link to='/partners'> <img src={pedigree} alt="pedigree"/> </Link>
                        <Link to='/partners'> <img src={whiskas} alt="whiskas"/> </Link>
                        <Link to='/partners'> <img src={chappi} alt="chappi"/> </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Partners
