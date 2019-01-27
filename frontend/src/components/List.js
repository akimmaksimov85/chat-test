import React, { Component } from 'react'

class List extends Component {

    createTasks = item => {
        return <li key={item.key}>{item.value}</li>
    };

    render() {
        const nicknames = this.props.nicknames;
        const nickNamesList = nicknames.map(this.createTasks);
        const counter = this.props.counter;

        return (
            <div>
                <p>nicknames: {counter}</p>
                <ul className="theList">{nickNamesList}</ul>
            </div>
        )
    }
}

export default List