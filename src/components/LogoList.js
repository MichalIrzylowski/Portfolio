import React from 'react';
import Logo from './Logo';

const LogoList = ({logos}) => {
  const Logos = logos.map((l, i) => (
    <Logo key={i} logo={l} />
  ))
  return (
    <div className='LogoList'>
      {Logos}
    </div>
  )
}

export default LogoList;
