import React from 'react';
import './Contacts.scss';
import location from '../assets/location.svg';
import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';

class Contacts extends React.Component{
    render() {
        return (
            <div className='contacts_wrapper main_section'>
                <div className="contacts_container">
                    <h4>FIND US</h4>
                    <div className="contacts_info">
                        <h5>PET SHELTER</h5>

                        <address>
                            Visit us at:<br/>
                            Box 564, Disneyland<br/>
                            USA
                        </address>

                        <address>
                            <img src={phone} alt="phone_sign"/> 999 - (999) - 999<br/>
                            <img src={mail} alt="mail_sign"/> petshelter@gmail.com<br/>
                        </address>

                        <div className="contacts_location">
                            <img src={location} alt="location_sign"/>
                        </div>
                    </div>

                    <div className="contacts_map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31503.994715091903!2d-81.47741751745227!3d28.43860492647941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9865633b063f568d!2sPirate&#39;s+Cove+Adventure+Golf!5e0!3m2!1suk!2sua!4v1506619125169" width="300" height="225" frameBorder="0" style={{border: 0}} allowFullScreen =""></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contacts
