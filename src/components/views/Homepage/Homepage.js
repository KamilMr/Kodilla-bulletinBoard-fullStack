import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Material-Ui
import { getAll, deletePostRequest, isLogIn, fetchPublished } from '../../../redux/postsRedux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


import styles from './Homepage.module.scss';
import { Card, CardActionArea, CardContent, CardMedia, CardActions, Typography, Grid } from '@material-ui/core';

class Component extends React.Component {

  componentDidMount() {
    const { fetchPublishedPosts } = this.props;
    fetchPublishedPosts();
  }

  render() {
    const { posts, deleteItem, isLogIn } = this.props;
    console.log(posts);
    let button;
    if (isLogIn === 'true') {
      button = <Button href={'/posts/add'} color="secondary" variant="contained" className={styles.marginTop}>new announcment</Button>;
    } else {
      button = <div className={styles.containerAlert}>Musisz być zalogowany aby dodać, edytować lub usunąć ogłoszenie</div>;
    }

    return (

      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>{button}</Grid>
        {posts.map(row => (
          <Grid item className={styles.root} key={row._id} sm={12} xs={12} >
            <Card className={styles.root} >
              <CardActionArea>
                <CardMedia
                  className={styles.media}
                  image={row.photo}
                  title={row.title}
                  src={`/posts/${row._id}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {row.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {row.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={`/posts/${row._id}`}  >Zobacz</Button>
                <IconButton onClick={() => (isLogIn === 'true' ? deleteItem(row) : '')} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
  getAll: PropTypes.func,
  updateStatus: PropTypes.func,
  deleteItem: PropTypes.func,
  isLogIn: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLogIn: isLogIn(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
  deleteItem: arg => dispatch(deletePostRequest(arg)),
});

// const mapDispatchToProps = dispatch => ({
// });

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
