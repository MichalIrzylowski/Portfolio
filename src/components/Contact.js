import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoadingMessage from './LoadingMessage';
import MessageFeedback from './MessageFeedback';
import { sendMessage } from '../redux/actions';

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
    const message = this.props.messageRecieved ? this.props.messageRecieved : this.props.errorRecieved;
    const type = this.props.messageRecieved ? 'Success' :
                 this.props.errorRecieved ? 'Error' : undefined;
    return(
      <form className='Informations ContactForm' onSubmit={this.handleSubmit}>
        <label className='ContactForm-Label' htmlFor='name'>Imię:</label>
        <input className='ContactForm-Input' type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='np.: Michał' />
        <label className='ContactForm-Label' htmlFor='email'>e-mail:</label>
        <input className='ContactForm-Input' type='email' name='email'  value={this.state.email} onChange={this.handleChange} placeholder='np.: przykład@przykład.pl' />
        <label className='ContactForm-Label' htmlFor='message'>Wiadomość:</label>
        <textarea className='ContactForm-Input' name='message' style={STYLE} value={this.state.message} onChange={this.handleChange} placeholder='Przykładowy tekst wiadomosci.' ></textarea>
        {this.props.messageSent && <LoadingMessage />}
        {(this.props.messageRecieved || this.props.errorRecieved) && <MessageFeedback message={message} type={type} />}
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

function mapStateToProps (state) {
  return {
    messageSent: state.messageSent.loading,
    messageRecieved: state.messageSent.message,
    errorRecieved: state.messageSent.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
