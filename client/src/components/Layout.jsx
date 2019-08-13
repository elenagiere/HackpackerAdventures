import React from 'react';
import PropTypes from 'prop-types';
import MainHeader from './MainHeader.jsx';
import EmailPrompt from './EmailPrompt.jsx';
import Footer from './Footer.jsx';

export default function Layout ({children}) {
    return(
      <div>
         <MainHeader></MainHeader>
         { children }
         <EmailPrompt></EmailPrompt>
         <Footer></Footer>
      </div>
     );
}

Layout.propTypes = {
    children: PropTypes.node
};