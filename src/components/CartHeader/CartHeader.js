import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../basic/Header';
import { cartSelector } from '../../store/selectors';
import { actions } from '../../store/domains';

export const CartHeader = () => {
  const dispatch = useDispatch();
  const list = useSelector(cartSelector);
  const clearCart = () => {
    dispatch(actions.clearCart())
  };

  return (
    <Header selected={list} clearCart={clearCart} />
  );
};
