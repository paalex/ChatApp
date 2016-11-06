import React from 'react';
import Message from './Message';

export default class Messages extends React.Component{

render() {
const messages = this.props.messages.map((message,i)=>{
    return (
        <Message key={i}
            username={message.username}
            message={message.message}
            fromMe={message.fromMe} />
    );
});

return (
    <div className='messages' id='messagesList'>
    { messages }
    </div>
);
}

componentDidUpdate(){
    const objDiv = document.getElementById('messagesList');
    objDiv.scrollTop = objDiv.scrollHeight;
}
}

Messages.defaultProps = {
  messages: []
};
