import React from 'react';
import {ProfileImage} from './Image';

const FaceCard = () => (
  <div className='Card'>
    <ProfileImage />
    <p className='Card-Item'><i className='far fa-envelope' ></i> <strong>email:</strong> michal.irzylowski@gmail.com</p>
    <p className='Card-Item'><i className='fas fa-phone' ></i> <strong>tel.:</strong> 794 731 291</p>
    <p className='Card-Item'><i className='fab fa-github' ></i> <strong>GitHub:</strong> <a target="_blank" rel="noopener noreferrer" href='https://github.com/MichalIrzylowski'>https://github.com/MichalIrzylowski</a></p>
  </div>

)

export default FaceCard;
