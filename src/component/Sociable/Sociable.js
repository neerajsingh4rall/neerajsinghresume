import React from 'react';
import '../Sociable/Sociable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const sociable = (props) => (
    <section className="socialable">
    <div className="social_links">
            <ul>
                <a href="#"><li><FontAwesomeIcon icon={faFacebook}/></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faTwitter}/></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faInstagram}/></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faLinkedin}/></li></a>
            </ul>
        </div>
    </section>
)

export default sociable;