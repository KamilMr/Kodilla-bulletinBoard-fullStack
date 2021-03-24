import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll, deletePostRequest, fetchDrafts, isLogIn } from '../../../redux/postsRedux';

//Material-Ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import styles from './UserList.module.scss';
import { NotFound } from '../NotFound/NotFound';

class Component extends React.Component {

  componentDidMount() {
    const { fetchDraftsPosts } = this.props;
    fetchDraftsPosts();
  }

  render() {
    const { posts, deleteItem, isLogIn } = this.props;

    let button;
    let deleteButton;
    if(isLogIn === 'true'){
      button =  <Button href={'/posts/add'} color="primary" variant="contained">new announcment</Button>;
      deleteButton = <DeleteIcon />;
    }else {
      button = <div className={styles.containerAlert}>Musisz być zalogowany aby dodać/edytować lub usunąć ogłoszenie</div>;
    }

    if(isLogIn === 'false') {
      return <NotFound />;
    }else return (
      <div className={styles.root} style={{ width: '100%' }}>
        <h1 style={{textAlign: 'center '}}>UserList: Lista ogłoszeń</h1>
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
                  <Button href={`/posts/${row._id}`}>Zobacz</Button>
                </TableCell>
                <TableCell component="th" scope="row">
                  <IconButton onClick={() => (deleteItem(row))} aria-label="delete">
                    {deleteButton}
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
  getAll: PropTypes.func,
  fetchDraftsPosts: PropTypes.func,
  updateStatus: PropTypes.func,
  deleteItem: PropTypes.func,
  isLogIn: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLogIn: isLogIn(state),
});

const mapDispatchToProps = dispatch => ({
  fetchDraftsPosts: () => dispatch(fetchDrafts()),
  deleteItem: arg => dispatch(deletePostRequest(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as UserList,
  Container as UserList,
  Component as UserListComponent,
};
