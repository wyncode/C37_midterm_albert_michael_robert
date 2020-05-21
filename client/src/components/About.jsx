import React from 'react';

const About = () => {
  return (
    <div className="about-main">
      <h1> About Us!</h1>
      <div className="threeOfUs">
        <div className="coders">
          <img src={'../assets/images/robert.jp'} alt="Robert" />
          Robert
        </div>
        <div className="coders">
          <img src={'../assets/images/michael.JPG'} alt="Michael" /> Michael
        </div>
        <div className="coders">
          <img src={'../assets/images/albert.jpg'} alt="Albert" />
          Albert
        </div>
      </div>
    </div>
  );
};

export default About;
