import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'About'
    }
  }

  handleClick = (name) => {
    this.setState({...this.state, activeItem: name});
  }

  render() {
    return (
      <nav>
        <h1>Michał Irzyłowski</h1>
        <HamburgerIcon />
        <ul className='Menu'>
          <li className={this.state.activeItem === 'About' ? 'Menu-item active' : 'Menu-item'} onClick={() => this.handleClick('About')}><Link to='/'>O mnie</Link></li>
          <li className={this.state.activeItem === 'Projects' ? 'Menu-item active' : 'Menu-item'} onClick={() => this.handleClick('Projects')}><Link to='/Projects'>Projekty</Link></li>
          <li className={this.state.activeItem === 'Contact' ? 'Menu-item active' : 'Menu-item'} onClick={() => this.handleClick('Contact')}><Link to='/Contact'>Kontakt</Link></li>
        </ul>
      </nav>
    )
  }
}
