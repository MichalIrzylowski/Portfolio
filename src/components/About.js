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
    <p className='About-Header'><b>Cześć!</b></p>
      <p>Mam na imię Michał i chcę zostać programistą webowym. Z wykształcenia jestem chemikiem i obecnie pracuję jako chemik analityk w jednej z najszybciej rozwijającej się firmie biotechnologicznej w Polsce.</p>
      <p>Około półtora roku temu postanowiłem rozwinąć swoje zainteresowanie, którym jest programowanie (którym interesuję się od zawsze). Naukę zacząłem od C++. Szybko okazało się, że bardziej interesuje mnie programowanie webowe. W końcu zacząłem tworzyć proste strony w HTML i CSS.</p>
      <p>Po opanowaniu podstaw tych języków naturalnym krokiem była nauka JavaScriptu. Po poznaniu podstaw JS'a doszedłem do wniosku, że właśnie tym chcę zajmować się w życiu.</p>
      <p>Swobodnie czuję się w React, Redux, React-Router, Node.js, ES6, CSS3 i HTML5. Obecnie szukam pracy jako <strong>Front-end developer</strong> (z nastawieniem na React) albo <strong>Full-Stack developer</strong>.</p>
      <p>W dalszych planach mam zamiar poznać Webpack oraz inny back-endowy język programowania (np.: Python albo Java).</p>

      <LogoList logos={logos} />
  </div>
)

export default About;
