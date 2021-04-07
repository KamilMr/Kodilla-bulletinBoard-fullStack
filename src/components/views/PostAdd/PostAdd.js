import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TextField, CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { addPostRequest, isLogIn } from '../../../redux/postsRedux';

import styles from './PostAdd.module.scss';
import { NotFound } from '../NotFound/NotFound';
import { DropzoneArea } from 'material-ui-dropzone';


class Component extends React.Component {

  state = {
    post: {
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

  handleChange(files) {
    console.log(files);
    this.setState({
      post: {photo: files},
    });
  }
  updateTextField = ({ target }) => {
    const { post } = this.state;
    const { name, value } = target;

    this.setState({ post: { ...post, [name]: value } });
  }

  newDate = () => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    let newdate = day + "/" + month + "/" + year;
    return newdate
  }


  submitForm = (e) => {
    e.preventDefault();
    const { post } = this.state;
    const { newPost } = this.props;
    this.setState({post: {...post, publication: this.newDate()}});
    setTimeout(() => {
      newPost(this.state.post);
    }, 1000);
  }
  render() {
    const { updateTextField, submitForm } = this;
    const { post } = this.state;
    const { isLogIn } = this.props;

    if (isLogIn === 'false') {
      return <NotFound />;
    } else return (

      <div className={styles.root}>
        <h2>Nowe ogłoszenie</h2>
        <form onSubmit={submitForm}>
          <Grid container spacing={1}>
            <Grid item xs={7}>
              <Paper >
                <TextField required fullWidth id="title" label="Tytuł" InputProps={{ disableUnderline: true }} name="title" onChange={updateTextField} />
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper >
                <TextField id="price" label="Cena" name="price" onChange={updateTextField} />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" name="status" onChange={updateTextField} defaultValue="draft" >
                <MenuItem value={'draft'}>Szkic</MenuItem>
                <MenuItem value={'published'}>Opublikuj</MenuItem>
                <MenuItem value={'end'}>Zakończ</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} >
              <DropzoneArea
                filesLimit={1}
                onChange={this.handleChange.bind(this)}
              />
            </Grid>
            <Grid item xs={12} >
              <Paper>
                <TextField required fullWidth multiline value={post.description} rows="5" id="content" label="Opis" name="description" onChange={updateTextField} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper >
                <TextField required id="author-email" label="Email" name="email" onChange={updateTextField} InputProps={{ disableUnderline: true }} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper >
                <TextField id="author-phone" label="Telefon" name="phone" onChange={updateTextField} InputProps={{ disableUnderline: true }} />
              </Paper>
            </Grid>
          </Grid>
          <Button className={styles.margin_top} startIcon={<SaveIcon />}
            constiant="contained" type="submit">Save</Button>
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
  isLogIn: PropTypes.string,
};

const mapStateToProps = state => ({
  isLogIn: isLogIn(state),
});

const mapDispatchToProps = dispatch => ({
  newPost: post => dispatch(addPostRequest(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
