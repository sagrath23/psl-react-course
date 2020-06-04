import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageContext } from '../../pages';
import { Header } from '../basic/Header';
import { cartSelector } from '../../store/selectors';
import { actions } from '../../store/domains';

export const CartHeader = () => {
  const dispatch = useDispatch();
  const { pageContext: { isSidebarOpen, toggleSidebar } } = useContext(PageContext);
  const list = useSelector(cartSelector);
  const clearCart = () => {
    dispatch(actions.clearCart())
  };
  const handleMenuButtonClick = () => toggleSidebar(!isSidebarOpen);

  return (
    <Header isSidebarOpen={isSidebarOpen} menuClickHandler={handleMenuButtonClick} selected={list} clearCart={clearCart} />
  );
};
