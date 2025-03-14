import React from 'react';
import { useLocation } from 'react-router-dom';
import videoBg from '../components/background/dimslowspacevid.mp4';
import epBg from '../components/background/rm-portal1.jpg'; // Ensure the correct import
import localBg from '../components/background/rm-cool1.jpeg'; // Ensure the correct import

const Main = () => {
  const location = useLocation();
  

  return (
    <div className="main">
      {/* Show video background for home page and dynamic pages like /1, /2, etc. */}
      {(location.pathname === '/' || location.pathname.match(/^\/\d+$/)) && (
        <>
          <div className="overlay"></div>
          <video 
            src={videoBg} 
            autoPlay 
            loop 
            muted 
            className="background-video"
          />
        </>
      )}

       {/* Show background image only on the /episodes pages */}
       {location.pathname.startsWith ('/episodes') && (
        <div className="background-container">
          <div className="overlay"></div> 
          <img 
            src={epBg} 
            alt="Rick and Morty Portal" 
            className="background-image"
          />
        </div>
        
      )}
      {/* Show background image only on the /location pages */}
      {location.pathname.startsWith('/location') && (
        <div className="background-container">
          <div className="overlay"></div> 
          <img 
            src={localBg} 
            alt="Rick and Morty Portal" 
            className="background-image"
          />
        </div>
        )}
    </div>
  );
}

export default Main;
