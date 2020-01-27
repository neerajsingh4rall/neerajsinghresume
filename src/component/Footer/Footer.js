import React from 'react';
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footer = (props) => (
    <footer>
        <section className="contact">
            <div className="detail">
                <p>email:</p> <p className="mail_para">neeraj.4rall.singh@gmail.com</p>
                <p>phone: 9958684283</p>
                <p>location: gaziabad, UP</p>
            </div>
         <div className="hireme">
             <div className="send_mail">
             <a href="#">HIRE ME <FontAwesomeIcon icon="check-square" /></a>
             </div>
         </div>
        </section>
    </footer>
)
export default footer;