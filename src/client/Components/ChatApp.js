import React from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';

export default class ChatApp extends React.Component{
    constructor(props){
        super(props);
        this.state = { messages:[]};
        this.sendHandler = this.sendHandler.bind(this);
//        this.socket = io(config.api).connect();

//        this.socket.on('server:message',message=>{
  //          this.addMessage(message);
//        });
    }

    render(){
        return (
            <div className="messagesContainer">
            <h3>Chat app</h3>
            <Messages messages={this.state.messages} />
            <ChatInput onSend={this.sendHandler} />
            </div>
        );
    }

    sendHandler(message){
        const messageObject = {
            username: this.props.username,
             message
        };

//        this.socket.emit('client:message',messageObject);

        messageObject.fromMe = true;
        this.addMessage(messageObject);
    }

    addMessage(message){
      console.log(`message: `, message);

        let messages = this.state.messages;
        console.log(`message: ${messages}`, messages);

        messages.push(message);
        this.setState({messages});
    }
}
