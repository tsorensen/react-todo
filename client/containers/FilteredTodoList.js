import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { updateTodo } from '../actions';

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick(todo) {
      dispatch(updateTodo(todo.id, {
        completed: !todo.completed
      }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
