import React from 'react';
import '../css/Underconstruction.css';

const Underconstruction = () => {
  return (
    <div className="under-construction">
      <header className="header">
        <h1>LimitLess Infotech</h1>
        
      </header>
      <main className="main-content">
        <h1 className="title">Under Construction</h1>
        <p className="message">We apologize for the inconvenience. Our website is currently under construction. Please check back later.</p>
        <div className="countdown-timer">
           <div id="countdown"></div>
        </div>
      </main>
      {/* <footer className="footer">
      <tr>
        <td>Copyright © 2023 limitlessinfotech</td>
      </tr>
      </footer> */}
    </div>
  );
}

export default Underconstruction;
