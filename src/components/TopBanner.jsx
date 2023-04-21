import React from 'react';
import '../styles/topbanner.scss';

function TopBanner({ image, text}) {

  const style = {
    backgroundImage: `url(${image})`,
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative'
  }

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    textAlign: 'center',
    textShadow: '1px 1px 2px black',
    fontSize: '3rem',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }

  return (
    <div style={style}>
      <h1 style={textStyle}>{text}</h1>
    </div>
  );
}

export default TopBanner;