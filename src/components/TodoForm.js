import React from 'react';

import {TodoContext} from '../context/TodoContext';

export class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todotitle: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event, addNewTodoItem) {
        addNewTodoItem(this.state.todotitle);
        event.preventDefault();
    }

    render() {
        return (
            <TodoContext.Consumer>
                {
                    ({addNewTodoItem, resetTodoList}) => {
                        return (
                            <form className='TodoForm' onSubmit={(e) => this.handleSubmit(e,addNewTodoItem)}>
                                <div>
                                    <input type="text" name="todotitle" value={this.state.todo_title} onChange={this.handleInputChange} />
                                    <input name="submit-todoform" type="button" value="Submit" onClick={() => addNewTodoItem(this.state.todotitle)}/>
                                    <input name="reset-todolist" type="button" value="Clear" onClick={resetTodoList}/>
                                </div>
                            </form>
                        );
                    }
                }
            </TodoContext.Consumer>
        );
    }
}