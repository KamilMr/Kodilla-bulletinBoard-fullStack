import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { getAll, updateStatus, isLogIn } from '../../../redux/postsRedux';

import styles from './PostEdit.module.scss';
import { NotFound } from '../NotFound/NotFound';


class Component extends React.Component {

  state = {
    post: {
      id: '',
      title: '',
      description: '',
      publication: '',
      lastEdit: '',
      email: '',
      status: 'draft',
      price: '',
      phone: '',
      photo: '',
      localization: '',
    },
    isError: false,
  }



  async componentDidMount() {
    const { posts } = this.props;
    let id = this.props.match.params.id;
    let onePost = posts.filter(item => item.id == id)[0];
    this.setState({ post: { ...onePost } });

  }


  updateTextField = ({ target }) => {
    const { post } = this.state;
    const { name, value } = target;

    this.setState({ post: { ...post, [name]: value } });
  };

  calculateId = (posts, id) => {
    let onePost = posts.filter(item => item.id == id)[0];
    return onePost;
  };

  submitForm = (e) => {
    e.preventDefault();
    const { post } = this.state;
    const { newPost } = this.props;
    newPost(post);
  };

  render() {
    const { updateTextField, submitForm, calculateId } = this;
    const { posts, isLogIn } = this.props;
    let id = this.props.match.params.id;
    console.log(this.props.match);
    
    if (isLogIn === 'false') {
      return <NotFound />;
    }else return (
      <div className={styles.root}>
        <h2>Edytuj Ogłoszenie</h2>
        <form onSubmit={submitForm}>
          <Grid container spacing={1}>
            <Grid item xs={7}>
              <Paper >
                <TextField required fullWidth id="title" defaultValue={calculateId(posts, id).title} label="Tytuł" InputProps={{ disableUnderline: true }} name="title" onChange={updateTextField} />
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper >
                <TextField id="price" label="Cena" name="price" defaultValue={calculateId(posts, id).price} onChange={updateTextField} />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" name="status" defaultValue={calculateId(posts, id).status} onChange={updateTextField}>
                <MenuItem value={'draft'}>Szkic</MenuItem>
                <MenuItem value={'public'}>Opublikuj</MenuItem>
                <MenuItem value={'end'}>Zakończ</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} >
              <Paper>
                <TextField required fullWidth multiline rows="5" id="content" label="Opis" name="description" defaultValue={calculateId(posts, id).description} onChange={updateTextField} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper >
                <TextField required id="author-email" label="Email" name="email" defaultValue={calculateId(posts, id).email} onChange={updateTextField} InputProps={{ disableUnderline: true }} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper >
                <TextField id="author-phone" label="Telefon" name="phone" defaultValue={calculateId(posts, id).phone} onChange={updateTextField} InputProps={{ disableUnderline: true }} />
              </Paper>
            </Grid>
          </Grid>
          <Button className={styles.margin_top} startIcon={<SaveIcon />}
            variant="contained" type="submit">Save</Button>
        </form>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  addPost: PropTypes.func,
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
  newPost: arg => dispatch(updateStatus(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
