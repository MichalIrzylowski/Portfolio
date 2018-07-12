import React from 'react';
import LogoList from './LogoList'

const logos = [{
  picture: 'https://sandstorm.de/_Resources/Persistent/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg',
  title: 'React'
}, {
  picture: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
  title: 'Redux'
}, {
   picture: 'https://cdn.worldvectorlogo.com/logos/react-router.svg',
   title: 'React-Router'
}, {
  picture: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  title: 'Node.js'
}, {
  picture: 'https://cdn.worldvectorlogo.com/logos/es6.svg',
  title: 'ES6'
}, {
  picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg',
  title: 'CSS3'
}, {
  picture: 'https://cdn.worldvectorlogo.com/logos/html-5.svg',
  title: 'HTML5'
}]

const About = () => (
  <div className='Informations About'>
    <h3>Cześć!</h3>
      <p>Mam na imię Michał, z wykształcenia jestem chemikiem analitykiem. Obecnie pracuję w jednej z najbardziej rozwijającej się firmie biotechnologicznej w Polsce.</p>
      <p>Około rok temu postanowiłem rozwinąć jedną ze swoich pasji, którą jest programowanie. W wolnych chwilach uczę się programowania i pielęgnuję drugą z moich pasji, którą jest kolarstwo szosowe.</p>
      <p>Sprawnie czuję się w React, Redux, React-Router, Node.js, ES6, CSS3 i HTML5. Obecnie szukam pracy jako <strong>Front-end developer</strong> (z nastawieniem na React) albo <strong>Full-Stack developer</strong> W dalszych planach mam zamiar nauczyć się Webpacka oraz innego języka programowania (np.: Python albo Java).</p>

      <LogoList logos={logos} />
  </div>
)

export default About;
