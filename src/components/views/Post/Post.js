import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import { initialState } from '../../../redux/initialState.js';

//Material-UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';

import styles from './Post.module.scss';


class Component extends React.Component {

  render() {
    const { posts, match} = this.props;
    console.log(this.props);
    console.log(match.params.id);
    return(
      <div className={styles.root}>
        <h2>Ogłoszenie</h2>
        <Grid container spacing={1}>
          <Grid item xs={7} >
            <Paper>
              {posts[0].title}

            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper >
              {posts[0].price}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            {posts[0].status}
          </Grid>
          <Grid item xs={12} >
            <Paper>
              {posts[0].description}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >{posts[0].email}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >
              {posts[0].phone}</Paper>
          </Grid>
        </Grid>
        <Button href={`/post/:${posts[0].id}/edit`} className={styles.margin_top} startIcon={<SaveIcon />}
          variant="contained">Edit</Button>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  row: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
