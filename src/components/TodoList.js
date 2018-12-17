import React from 'react';
import {TodoItem} from "./TodoItem"

export class TodoList extends React.Component {
    render() {
        return (
            <div>
                            {
                (this.props.todolist.length === 0) ? (
                    <p>No todo saved.</p>
                ) : (
                    <ul>
                        {this.props.todolist.map((item, index) => <TodoItem key={`${item.title}_${index}`} title={item.title} isDone={item.isDone}/>)}
                    </ul>
                )
            }
            </div>
        );
    }
}