import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll, updateStatus } from '../../../redux/postsRedux';

//Material-Ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import styles from './Homepage.module.scss';

// const deleteItem = (e) => {
  
  
// };

class Component extends React.Component {
  
  render() {
    const { posts, deleteItem } = this.props;
    console.log(this.props);
    return (
      <div className={styles.root}>
        <h2>Homepage: Lista ogłoszeń</h2>
        <Button href={'/post/add'} variant="contained">new announcment</Button>
        <Table className={styles.table} aria-label="simple table">
          <TableBody>
            {posts.announcements.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.description}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button href={`/post/:${row.id}`}>Zobacz</Button>
                </TableCell>
                <TableCell component="th" scope="row">
                  <IconButton onClick={() => (deleteItem(row))} aria-label="delete">
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
  posts: PropTypes.object,
  getAll: PropTypes.func,
  updateStatus: PropTypes.func,
  deleteItem: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  deleteItem: arg => dispatch(updateStatus(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
