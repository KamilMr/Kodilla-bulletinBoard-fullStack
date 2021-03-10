import React from 'react';
import PropTypes from 'prop-types';
import { initialState } from '../../../redux/initialState.js';

//Material-UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const rows = initialState.posts.data.announcements;

const Component = ({ className, children, row }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Ogłoszenie</h2>
    <Grid container spacing={1}>
      <Grid item xs={7} >
        <Paper >
          {rows[0].title}

        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper >
          {rows[0].price}
        </Paper>
      </Grid>
      <Grid item xs={3}>
        {rows[0].status}
      </Grid>
      <Grid item xs={12} >
        <Paper>
          {rows[0].description}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper >{rows[0].email}</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper >
          {rows[0].phone}</Paper>
      </Grid>
    </Grid>
    <Button href={`/post/:${rows[0].id}/edit`} className={styles.margin_top} startIcon={<SaveIcon />}
      variant="contained">Edit</Button>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  row: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
