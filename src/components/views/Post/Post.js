import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll, isLogIn } from '../../../redux/postsRedux';

//Material-UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';

import styles from './Post.module.scss';

const calculateId = (posts, id) => {
  // eslint-disable-next-line eqeqeq
  return posts.filter(item => item.id == id)[0];
};

class Component extends React.Component {

  render() {
    const { posts, isLogIn } = this.props;
    let id = this.props.match.params.id;

    let button;
    if (isLogIn === 'true') {
      button = <Button href={`/post/${calculateId(posts, id).id}/edit`} className={styles.margin_top} startIcon={<SaveIcon />}
        variant="contained">Edit</Button>;
    }
    return (
      <div className={styles.root}>
        <h2>Ogłoszenie</h2>
        <Grid container spacing={1}>
          <Grid item xs={7} >
            <Paper>
              {calculateId(posts, id).title}
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper >
              {calculateId(posts, id).price}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            {calculateId(posts, id).status}
          </Grid>
          <Grid item xs={12} >
            <Paper>
              {calculateId(posts, id).description}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >{calculateId(posts, id).email}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >
              {calculateId(posts, id).phone}</Paper>
          </Grid>
        </Grid>
        {button}
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  posts: PropTypes.array,
  className: PropTypes.string,
  row: PropTypes.object,
  match: PropTypes.object,
  isLogIn: PropTypes.string,
  

};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLogIn: isLogIn(state,),
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
