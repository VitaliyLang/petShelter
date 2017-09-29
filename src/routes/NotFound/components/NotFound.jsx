import React from "react";
import {Link} from 'react-router';
import './NotFound.scss';
import dog from '../assets/dog404.png';

class NotFound extends React.Component {
    render() {
        return (
            <div className="container_NotFound">
                <Link to = "/">
                    <img src={dog} alt="error"/>
                </Link>
                <h1>File not found</h1>
                <p>
                    The site configured at this address does not contain the requested file.
                </p>
            </div>
        );
    }
}

export default NotFound
