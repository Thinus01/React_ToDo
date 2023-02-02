import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos } = props;
  const { handleChangeProps } = props;
  const { deleteTodoProps } = props;
  const { setUpdate } = props;
  const display = (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
  return display;
};

TodosList.propTypes = {
  todos: PropTypes.string.isRequired,
  handleChangeProps: PropTypes.string.isRequired,
  deleteTodoProps: PropTypes.string.isRequired,
  setUpdate: PropTypes.string.isRequired,
};

export default TodosList;
