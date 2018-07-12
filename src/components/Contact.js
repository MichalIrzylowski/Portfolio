import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../redux/actions'

const STYLE = {
  resize: 'none',
  height: '150px'
}

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendMessage(this.state);
    this.setState({name: '', email: '', message: ''});
  }

  render() {
    return(
      <form className='Informations ContactForm' onSubmit={this.handleSubmit}>
        <label className='ContactForm-Label' htmlFor='name'>Imię:</label>
        <input className='ContactForm-Input' type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='np.: Michał' />
        <label className='ContactForm-Label' htmlFor='email'>e-mail:</label>
        <input className='ContactForm-Input' type='email' name='email'  value={this.state.email} onChange={this.handleChange} placeholder='np.: przykład@przykład.pl' />
        <label className='ContactForm-Label' htmlFor='message'>Wiadomość:</label>
        <textarea className='ContactForm-Input' name='message' style={STYLE} value={this.state.message} onChange={this.handleChange} placeholder='Przykładowy tekst wiadomosci.' ></textarea>
        <input type='submit' value='Wyślij wiadomość!' className='ContactForm-Submit' />
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    sendMessage: (payload) => {
      dispatch(sendMessage(payload))
    }
  }
}

export default connect(null, mapDispatchToProps)(Contact);
