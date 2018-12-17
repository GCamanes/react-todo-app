import React from 'react';

export class TodoItem extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            title: props.title,
            isDone: props.isDone
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    static getDerivedStateFromProps (props, state) {   
        return {
            title : state.title,
            isdone : state.isDone
        }
    }
    
    handleInputChange(event) {
        const value = event.target.value;

        if (value && this.state.isDone) {
            this.setState({isDone: false});
        } else {
            this.setState({isDone: value});
        }
    }

    render () {
        return (
            <li className='TodoItem' onClick={this.handleClick}>
                <input type="checkbox" name="checkbox_todo" checked={this.state.isDone} onChange={this.handleInputChange}/>
                {
                    (this.state.isDone) ? (
                        <s>{this.state.title}</s>
                    ) : (
                        <span>{this.state.title}</span>
                    )
                }
            </li>
        );
    }

    static defaultProps = {
        name: 'no todo text'
    };
}