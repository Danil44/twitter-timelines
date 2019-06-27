import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './TimelinesSearchStyles';

export default function TimelinesSearch({ onSubmit }) {
  const classes = useStyles();
  const [search, setInput] = useState({ username: '' });

  const handleChange = name => ({ target }) => {
    const { value } = target;

    setInput({ [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(search.username);

    setInput({ username: '' });
  };

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <form
          className={classes.search}
          data-test="TimelinesSearchComponent"
          onSubmit={handleSubmit}
        >
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            name="username"
            onChange={handleChange('username')}
            value={search.username}
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

TimelinesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
