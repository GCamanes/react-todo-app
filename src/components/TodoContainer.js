import React from 'react';
import {TodoForm} from "./TodoForm"
import {TodoList} from "./TodoList"
import { TodoItemObject } from '../model/TodoItemObject';
import { TodoContext, todoList} from '../context/TodoContext';

export class TodoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.addNewTodoItem = (title) => {
            this.setState(prevState => ({
                todolist: [...prevState.todolist, new TodoItemObject(title, false)]
            }))
        }

        this.resetTodoList = () => {
            this.setState(prevState => ({
                todolist: []
            }))
        }

        this.state = {
            todolist: todoList,
            addNewTodoItem: this.addNewTodoItem,
            resetTodoList: this.resetTodoList,
        };

        this.addNewTodoItem = this.addNewTodoItem.bind(this);
        this.resetTodoList = this.resetTodoList.bind(this);
    }

    render () {
        return (
            <TodoContext.Provider value={this.state}>
                <div>
                    <TodoForm />
                    <TodoList />
                </div>
            </TodoContext.Provider>
        );
    }
}