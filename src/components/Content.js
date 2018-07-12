import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Card from './Card';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Project from './Project';

const Content = ({location}) => {
  return (
    <article className='MainContent' >
      <Card />
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300} children>
            <Switch location={location}>
              <Route exact path='/' component={About} />
              <Route exact path='/Projects' component={Projects} />
              <Route exact path='/Contact' component={Contact} />
              <Route exact path='/Projects/:id' component={Project} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    </article>
  )
}

export default Content;
