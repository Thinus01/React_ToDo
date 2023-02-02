import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={
            this.state.title
          }
          name="title"
          onChange={this.onChange}
          className="input-text"
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}

addTodoProps.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InputTodo;
