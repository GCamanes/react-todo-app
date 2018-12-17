import React from 'react';
import { TodoItemObject } from '../model/TodoItemObject';

export let todoList = [
    new TodoItemObject("send an email to kevyn", true),
    new TodoItemObject("finish conception step", false),
    new TodoItemObject("do the evalbox test", false),
];

export const TodoContext = React.createContext({
    todoList,
    addNewTodoItem : () => {},
    resetTodoList: () => {}
});