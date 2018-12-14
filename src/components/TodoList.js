import React from 'react';
import {TodoItem} from "./TodoItem"

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {[ {
                        "title": "send an email to kevyn",
                        "isDone":true
                    } , {
                        "title": "finish conception step",
                        "isDone":false
                    } , {
                        "title": "doo the evalbox test",
                        "isDone":false
                    }
                ].map((item) => <TodoItem key={item.title} title={item.title} isDone={item.isDone}/>)}
            </ul>
        );
    }
}