import React from "react";
import '../css/logo.css';
const Logo = ( {logoSrc} ) => {
    return (
        <figure className='todolist__logocontainer'>
          <img 
          className='todolist__logo' 
          src={logoSrc} 
          alt='logo de freeCodeCamp' />
        </figure>
    );
};

export default Logo;