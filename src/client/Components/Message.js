import React from 'react';

export default class Message extends React.Component{

  render() {
  const fromMe = this.props.fromMe ? 'from-me' :'';

  return(
      <div className={`message ${fromMe}`}>
        <div className='username'>
         { this.props.username }
       </div>
        <div className='message-body'>
          { this.props.message }
        </div>
      </div>
  );
  }
}
