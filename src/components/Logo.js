import React from 'react';

const Logo = ({logo}) => (
  <div className='logo'>
    <img src={logo.picture} alt={`Logo ${logo.title}`} className='logo-img' />
    <p>{logo.title}</p>
  </div>
);

export default Logo;
