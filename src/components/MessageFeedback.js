import React from 'react';

const MessageFeedback = ({message, type}) => {
  const style = type === 'Success' ? {color: 'green'} :
                type === 'Error' ? {color: 'red'} : undefined;
  return (
    <p className='MessageFeedback' style={style}>
      {message}
    </p>
  )
}

export default MessageFeedback;
