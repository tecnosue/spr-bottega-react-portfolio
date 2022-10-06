import React from 'react';
import LoginImg from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  return (
    <div className='about-wrapper'>
      <div 
          className="left-column"
          style={{
            backgroundImage: `url(${LoginImg})`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" />
            </div>
            <div className="text">
              +34-555-555-555
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-paper-plane" />            </div>
            <div className="text">
              dev@devmail.com
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-map-location-dot" />
            </div>
            <div className="text">
              Spain
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
