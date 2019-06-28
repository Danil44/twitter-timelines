import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@material-ui/core';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { withRouter } from 'react-router-dom';
import styles from './TimelinesSearch.module.css';

const { Search } = Input;

export class TimelinesSearch extends Component {
  state = { username: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { username } = this.state;
    const { onSubmit, history } = this.props;

    history.replace({
      pathname: '/search',
      search: `query=${username}`,
    });

    onSubmit(username);

    this.setState({ username: '' });
  };

  render() {
    const { username } = this.state;
    return (
      <Toolbar>
        <Search
          className={styles.input}
          name="username"
          placeholder="Search..."
          value={username}
          onChange={this.handleChange}
          onSearch={this.handleSubmit}
          style={{ maxWidth: 320 }}
          enterButton
        />
      </Toolbar>
    );
  }
}

export default withRouter(TimelinesSearch);
