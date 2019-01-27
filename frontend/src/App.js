import React, {Component} from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';
import Echo from 'laravel-echo'

class App extends Component {

    constructor() {
        super();
        this.state = {
            nicknames: [],
            counter: 0,
            nickname: {key: '', value: ''},
        };

        window.io = require('socket.io-client');

        window.Echo = new Echo({
            broadcaster: 'socket.io',
            host: window.location.hostname + ':6001'
        });
    }

    componentDidMount() {
        window.Echo.channel('room-channel')
            .listen('NewNicknameEvent', (e) => {
                this.addItem(e);
            });
    }

    handleInput = e => {
        const text = e.target.value;
        const nickname = {key: Date.now(), value: text};
        this.setState({
            nickname,
        });
    };

    addItem = e => {
        if (e.nickname !== '') {
            const newNickname = {key: Date.now(), value: e.nickname};
            const nicknames = [...this.state.nicknames, newNickname];
            const counter = ++this.state.counter;
            this.setState({
                nicknames: nicknames,
                counter: counter,
                nickname: {key: '', value: ''},
            });
        }
    };

    inputElement = React.createRef();

    render() {
        return (
            <div className="App">
                <Form
                    addItem={this.addItem}
                    inputElement={this.inputElement}
                    handleInput={this.handleInput}
                    nickname={this.state.nickname}
                />

                <List
                    counter={this.state.counter}
                    nicknames={this.state.nicknames}
                />
            </div>
        );
    }
}

export default App;
