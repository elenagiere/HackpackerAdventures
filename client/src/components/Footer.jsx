import React from 'react';
// import Posts from './Posts.jsx';
// import Banner from './Banner.jsx';
// import { imagePath } from '../Constants.js';
// import MainHeader from './MainHeader.jsx';
// import Footer from './Footer.jsx';
import EmailPrompt from './EmailPrompt.jsx';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer () {
    return(
        <div className="footer">
            {/* <div className="left form-row">
                <span>Subcribe</span>
                <input className="form-item" placeholder="Name" />
                <input className="form-item" placeholder="Email Address" />
                <button className="form-item">SUBSCRIBE</button>
            </div>
            <div className='center'>
                hello
            </div> */}
            {/* <div>
                <EmailPrompt></EmailPrompt>
            </div> */}
            <div className="right">
                <h3>Our Social Media</h3>
                <div className="icon-row">
                <a className="icon-button"
                    href="https://www.instagram.com/hackpackeradentures/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram /> 
                </a>
                <a className="icon-button"
                    href="https://www.facebook.com/Hack-packers-1443148652420450/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaFacebook /> 
                </a>
                <a className="icon-button"
                    href="https://www.youtube.com/user/sandraisamazing/videos?view_as=subscriber"
                    target="_blank"
                    rel="noopener noreferrer">
                        <FaYoutube /> 
                </a>
                </div>
            </div>
        </div>
     );
}
