import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import styles from './MainLayout.module.scss';


// import { connect } from 'react-redux';
// import { addPost } from '../../../redux/postsRedux.js';


class Component extends React.Component {
  render() {
    const { props } = this;
    return (
      <Container maxWidth="md" component="div" className={styles.root}>
        {props.children}
      </Container>
    );
  }

}

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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
