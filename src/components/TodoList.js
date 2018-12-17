import React from 'react';
import {TodoItem} from "./TodoItem"

import {TodoContext} from '../context/TodoContext';

export class TodoList extends React.Component {
    render() {
        return (
            <TodoContext.Consumer>
                {
                    ({todolist}) => {
                        return (
                            (todolist.length === 0) ? (
                                <p>No todo saved.</p>
                            ) : (
                                <ul>
                                    {todolist.map((item, index) => <TodoItem key={`${item.title}_${index}`} title={item.title} isDone={item.isDone}/>)}
                                </ul>
                            )
                        );
                    }
                }
            </TodoContext.Consumer>
        );
    }
}