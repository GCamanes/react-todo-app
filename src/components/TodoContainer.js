import React from 'react';
import {TodoForm} from "./TodoForm"
import {TodoList} from "./TodoList"
import { TodoItemObject } from '../model/TodoItemObject';

export class TodoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todolist: [
                /*new TodoItemObject("send an email to kevyn", true),
                new TodoItemObject("finish conception step", false),
                new TodoItemObject("do the evalbox test", false),*/
            ]
        };

        this.addNewTodoItem = this.addNewTodoItem.bind(this);
        this.resetTodoList = this.resetTodoList.bind(this);
    }

    addNewTodoItem(title) {
        this.setState(prevState => ({
            todolist: [...prevState.todolist, new TodoItemObject(title, false)]
        }))
    }

    resetTodoList() {
        this.setState(prevState => ({
            todolist: []
        }))
    }

    render () {
        return (
            <div>
                <TodoForm addNewTodoItem={this.addNewTodoItem} resetTodoList={this.resetTodoList}/>
                <TodoList todolist={this.state.todolist}/>
            </div>
        );
    }
}