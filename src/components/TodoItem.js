import React from 'react';

export class TodoItem extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            title: props.title,
            isDone: props.isDone
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClick(event) {
        console.log(event.nativeEvent.type);
    }

    static getDerivedStateFromProps (props, state) {   
          return {
            title : state.title,
            isdone : state.isDone
        }
    }
    
      handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
    
        console.log(name)

        this.setState({
          [name]: value
        }); 
      }

    render () {
        return (
            <li className='TodoItem' onClick={this.handleClick}>
                {this.state.title}<input type="checkbox" checked={this.state.isDone} onChange={this.handleInputChange}/>
            </li>
        );
    }

    static defaultProps = {
        name: 'no todo text'
    };
}