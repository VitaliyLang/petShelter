import React from 'react';
import './Contacts.scss';
import location from '../assets/location.svg';
import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';

class Contacts extends React.Component{
    render() {
        return (
            <div className='contacts_wrapper'>
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
                </div>
            </div>
        );
    }
}
export default Contacts
