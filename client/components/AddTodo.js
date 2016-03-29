import React, { Component } from 'react';

class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = this.refs.input;
    this.props.onSubmit(input.value);
    input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="input" />
        <button>Add Todo</button>
      </form>
    );
  }

}

export default AddTodo;
