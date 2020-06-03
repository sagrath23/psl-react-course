import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Header } from '../basic/Header';
import { cartSelector } from '../../store/selectors';
import { actions } from '../../store/domains';

export const CartHeader = ({ isOpenSidebar, toggleSidebar }) => {
  const dispatch = useDispatch();
  const list = useSelector(cartSelector);
  const clearCart = () => {
    dispatch(actions.clearCart())
  };
  const handleMenuButtonClick = () => toggleSidebar(!isOpenSidebar);
  const headerOptions = [(
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
    >
      <MenuIcon />
    </IconButton>
  )];

  return (
    <Header isOpenSidebar={isOpenSidebar} menuClickHandler={handleMenuButtonClick} selected={list} clearCart={clearCart} />
  );
};

CartHeader.propTypes = {
  isOpenSidebar: PropTypes.bool,
  toggleSidebar: PropTypes.func
};

CartHeader.defaultProps = {
  isOpenSidebar: false,
  toggleSidebar: () => {}
};
