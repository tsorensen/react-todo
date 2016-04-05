'use strict'

import { conect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { createTodo } from '../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(name) {
      dispatch(createTodo(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
