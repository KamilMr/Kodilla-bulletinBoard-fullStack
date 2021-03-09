import React from 'react';
import PropTypes from 'prop-types';
import { initialState } from '../../../redux/initialState.js';

//Material-Ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const rows = initialState.posts.data.announcements;
console.log(rows);

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    {console.log(rows)}
    <h2>Homepage: Lista ogłoszeń</h2>
    <Button href={'/post/add'} variant="contained">new announcment</Button>
    <Table className={styles.table} aria-label="simple table">
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.description}
            </TableCell>
            <TableCell component="th" scope="row">
              <Button>Edytuj</Button>
            </TableCell>
            <TableCell component="th" scope="row">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
