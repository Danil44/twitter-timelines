import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TimelinesSearch extends Component {
  state = { username: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { onSubmit } = this.props;
    const { username } = this.state;

    onSubmit(username);

    this.setState({ username: '' });
  };

  render() {
    const { username } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" onChange={this.handleChange} value={username} />
      </form>
    );
  }
}
