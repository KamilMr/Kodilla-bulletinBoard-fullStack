import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLogIn, getAll, fetchPost } from '../../../redux/postsRedux';
import ClipLoader from 'react-spinners/ClipLoader';


//Material-UI
import { Button, CardMedia } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';

import styles from './Post.module.scss';

class Component extends React.Component {

  componentDidMount() {
    const { getOnePost } = this.props;
    console.log(this.props.match);
    getOnePost(this.props.match.params.id);
  }

  render() {
    const { posts, isLogIn } = this.props;
    let id = this.props.match.params.id;
    console.log(this.props);
    let button;


    if (posts.length === 0) {
      return (
        <div><ClipLoader />Server is loading</div>
      );
    } else {
      if (isLogIn === 'true') {
        button = <Button href={`/posts/${id}/edit`} className={styles.margin_top} startIcon={<EditIcon />}
          variant="contained">Edit</Button>;
      }
      return (
        <div className={styles.root}>
          <Grid container spacing={3}>
            <Grid container>
              <Grid item xs={8}>
                <Paper className={styles.title} elevation={0} >{posts[0].title}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={0}>{posts[0].price + '  zł'}</Paper>
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <CardMedia className={styles.media} image={posts[0].photo} />
            </Grid>
            <Grid item xs={12} >
              <Paper className={styles.text_box} >
                {posts[0].text}
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper >{'Autor: ' + posts[0].author}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper >
                {'Numer telefonu: ' + posts[0].phone}</Paper>
            </Grid>
          </Grid>
          {button}
        </div>
      );
    }
  }
}

Component.propTypes = {
  children: PropTypes.node,
  posts: PropTypes.array,
  className: PropTypes.string,
  row: PropTypes.object,
  match: PropTypes.object,
  isLogIn: PropTypes.string,
  getOnePost: PropTypes.func,



};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLogIn: isLogIn(state,),
});

const mapDispatchToProps = dispatch => ({
  getOnePost: (id) => dispatch(fetchPost(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
