import React from 'react';
import '../styles/topbanner.scss';

function TopBanner({title, text}) {

  return (
    <div className="jumbotron">
        <div className="dark-overlay"></div>
        <div className="text-container">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{text}</h2>
        </div>
    </div>
  );
}

export default TopBanner;