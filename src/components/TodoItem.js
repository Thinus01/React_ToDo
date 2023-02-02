import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  render() {
    const { handleChangeProps } = this.props;
    const { deleteTodoProps } = this.props;
    const { setUpdate } = this.props;
    const { editing } = this.state;
    const { todo } = this.props;
    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { completed, id, title } = todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleChangeProps(id)}
            className={styles.checkbox}
          />
          <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  handleChangeProps: PropTypes.string.isRequired,
  deleteTodoProps: PropTypes.string.isRequired,
  setUpdate: PropTypes.string.isRequired,
  todo: PropTypes.string.isRequired,
};

export default TodoItem;
