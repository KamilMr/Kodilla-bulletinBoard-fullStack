import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll, deletePostRequest, isLogIn, fetchPublished } from '../../../redux/postsRedux';

//Material-Ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import styles from './Homepage.module.scss';


class Component extends React.Component {

  componentDidMount() {
    const { fetchPublishedPosts } = this.props;
    fetchPublishedPosts();
  }

  render() {
    const { posts, deleteItem, isLogIn } = this.props;
    let button;
    if (isLogIn === 'true') {
      button = <Button href={'/posts/add'} color="primary" variant="contained">new announcment</Button>;
    } else {
      button = <div className={styles.containerAlert}>Musisz być zalogowany aby dodać, edytować lub usunąć ogłoszenie</div>;
    }

    return (
      <div className={styles.root} style={{ width: '100%' }}>
        <h1 style={{textAlign: 'center '}}>HomePage: Lista ogłoszeń</h1>
        {button}
        <Table className={styles.table} aria-label="simple table">
          <TableBody>
            {posts.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.description}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button href={`/posts/${row._id}`}  >Zobacz</Button>
                </TableCell>
                <TableCell component="th" scope="row">
                  <IconButton onClick={() => (isLogIn === 'true' ? deleteItem(row) : '')} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
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
