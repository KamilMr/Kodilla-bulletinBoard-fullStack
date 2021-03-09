import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Nowe ogłoszenie</h2>
    <form>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Paper >
            <TextField required fullWidth id="title" label="Tytuł" InputProps={{ disableUnderline: true }} />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper >
            <TextField id="price" label="Cena" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value={10}>Szkic</MenuItem>
            <MenuItem value={20}>Opublikuj</MenuItem>
            <MenuItem value={30}>Zakończ</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} >
          <Paper>
            <TextField required fullWidth multiline rows="5" id="content" label="Opis" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper >
            <TextField required id="author-email" label="Email" InputProps={{ disableUnderline: true }} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper >
            <TextField id="author-phone" label="Telefon" InputProps={{ disableUnderline: true }} />
          </Paper>
        </Grid>
      </Grid>
    </form>
    <Button href={'/'} className={styles.margin_top} startIcon={<SaveIcon />}
      variant="contained">Save</Button>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
