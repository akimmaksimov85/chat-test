import React, { Component } from 'react'

class Form extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.inputElement.current.focus();
    }

    submit = e => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: this.props.nickname.value,
            })
        };

        const request = new Request('http://localhost:8090/api/v1/room/enter', options);
        fetch(request);
    };

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.submit}>
                        <input
                            placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.nickname.value}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form