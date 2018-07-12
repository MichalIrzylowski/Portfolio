import React, {Component} from 'react';

class HamburgerIcon extends Component {
  constructor(props) {
    super(props);
    this.state={
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render () {
    const clicked = this.state.clicked ? 'Clicked' : null;
    return (
      <div onClick={this.handleClick} className={`HamburgerIcon-wrapper ${clicked}`}>
        <div className='HamburgerIcon HamburgerIcon-1'></div>
        <div className='HamburgerIcon HamburgerIcon-2'></div>
        <div className='HamburgerIcon HamburgerIcon-3'></div>
      </div>
    )
  }
}

export default HamburgerIcon;
