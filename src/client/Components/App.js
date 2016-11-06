import React from 'react';
import ChatApp from './ChatApp';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ''};

        this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    }

    usernameChangeHandler(event){
        this.setState({username:event.target.value});
    }

    usernameSubmitHandler(event){
        event.preventDefault();
        this.setState({ submitted:true, username:this.state.username });
    }
    render() {
        if (this.state.submitted){
            return (
                <ChatApp username={this.state.username} />
            );
        }

        return (
        <form onSubmit={this.usernameSubmitHandler} className="clsUserName">
            <h1>Chat app</h1>
            <div>
                <input type="text" onChange={this.usernameChangeHandler} placeholder="Enter a nickname: " required />
            </div>
            <input type="submit" value="submit" />
        </form>
        );
    }
}

App.defaultProps = {};
