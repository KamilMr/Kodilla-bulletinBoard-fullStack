import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {TextField, CardMedia} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { getAll, updatePostRequest, isLogIn, fetchPost } from '../../../redux/postsRedux';

import styles from './PostEdit.module.scss';
import { NotFound } from '../NotFound/NotFound';


class Component extends React.Component {

  state = {
    post: {
      _id: '',
      title: '',
      text: '',
      created: '',
      updated: '',
      author: '',
      status: 'draft',
      price: '',
      phone: '',
      photo: '',
      location: '',
    },
    isError: false,
  }



  componentDidMount() {
    const { getOnePost } = this.props;
    let id = this.props.match.params.id;
    getOnePost(id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { posts } = this.props;
    if (prevProps.posts !== this.props.posts) {
      this.setState({ post: { ...posts[0] } });

    }
  }

  updateTextField = ({ target }) => {
    const { post } = this.state;
    const { name, value } = target;

    this.setState({ post: { ...post, [name]: value } });
  };

  submitForm = (e) => {
    // e.preventDefault();
    const { post } = this.state;
    const { newPost } = this.props;
    newPost(post);
  };

  render() {
    const { updateTextField, submitForm } = this;
    const { posts, isLogIn } = this.props;
    let id = this.props.match.params.id;
    if (isLogIn === 'false') {
      return <NotFound />;
    } else return (
      <div className={styles.root}>
        <h2>Edytuj ogłoszenie</h2>
        {posts[0] != undefined ?
          <form onSubmit={submitForm}>
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <Paper >
                  <TextField required fullWidth id="title" defaultValue={posts[0].title} label="Tytuł" InputProps={{ disableUnderline: true }} name="title" onChange={updateTextField} />
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper >
                  <TextField id="price" label="Cena" name="price" defaultValue={posts[0].price} onChange={updateTextField} />
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" name="status" defaultValue={posts[0].status} onChange={updateTextField}>
                  <MenuItem value={'draft'}>Szkic</MenuItem>
                  <MenuItem value={'published'}>Opublikuj</MenuItem>
                  <MenuItem value={'end'}>Zakończ</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} >
                <CardMedia className={styles.media} image={posts[0].photo} />
              </Grid>
              <Grid item xs={12} >
                <Paper>
                  <TextField required fullWidth multiline rows="5" id="content" label="Opis" name="text" defaultValue={posts[0].text} onChange={updateTextField} />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper >
                  <TextField required id="author-email" label="Email" name="email" defaultValue={posts[0].author} onChange={updateTextField} InputProps={{ disableUnderline: true }} />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper >
                  <TextField id="author-phone" label="Telefon" name="phone" defaultValue={posts[0].phone} onChange={updateTextField} InputProps={{ disableUnderline: true }} />
                </Paper>
              </Grid>
            </Grid>
            <Button className={styles.margin_top} startIcon={<SaveIcon />}
              variant="contained" type="submit">Save</Button>
          </form> : ''}
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  getOnePost: PropTypes.func,
  newPost: PropTypes.func,
  posts: PropTypes.array,
  match: PropTypes.object,
  isLogIn: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLogIn: isLogIn(state),
});

const mapDispatchToProps = dispatch => ({
  getOnePost: (id) => dispatch(fetchPost(id)),
  newPost: arg => dispatch(updatePostRequest(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
