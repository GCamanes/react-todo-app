import React from 'react';

export class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todotitle: "",
        };

        this.addNewTodoItem = props.addNewTodoItem;
        this.resetTodoList = props.resetTodoList;

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

    handleSubmit(event) {
        this.addNewTodoItem(this.state.todotitle);
        event.preventDefault();
    }

    render() {
        return (
            <form className='TodoForm' onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="todotitle" value={this.state.todo_title} onChange={this.handleInputChange} />
                    <input name="submit-todoform" type="submit" value="Submit" />
                    <input name="reset-todolist" type="button" value="Clear" onClick={this.resetTodoList}/>
                </div>
            </form>
        );
    }
}