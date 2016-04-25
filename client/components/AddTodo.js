import React, { Component } from 'react';
import styles from './AddTodo.css';

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
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input className={styles.input} ref="input" placeholder="What needs to get done?" />
        <button className={styles.submit}>Add Todo</button>
      </form>
    );
  }

}

export default AddTodo;
