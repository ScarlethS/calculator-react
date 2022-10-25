import React from "react";
import freeCodeCampLogo from '../images/freecodecamp-logo.png';

const FreeCodeCampLogoComp = () => {
    return(
        <div className="freecodecamp-logo-container">
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo of freeCodeCamp' />
        </div>
    )
}

export default FreeCodeCampLogoComp;