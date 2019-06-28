import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import styles from './TimelinesSearchStyles';

class TimelinesSearch extends Component {
  state = { username: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.shape({
      search: PropTypes.string.isRequired,
      bar: PropTypes.string.isRequired,
      searchIcon: PropTypes.string.isRequired,
      inputRoot: PropTypes.string.isRequired,
      inputInput: PropTypes.string.isRequired,
    }).isRequired,
  };

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { username } = this.state;
    const { onSubmit } = this.props;

    onSubmit(username);

    this.setState({ username: '' });
  };

  render() {
    const { username } = this.state;
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <form className={classes.search} onSubmit={this.handleSubmit}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              name="username"
              onChange={this.handleChange}
              value={username}
              margin="none"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </form>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TimelinesSearch);
