import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
    <Header isSidebarOpen={isSidebarOpen} menuClickHandler={handleMenuButtonClick}>
      <IconButton aria-label="add-product">
        <NavLink to="/add-product">
          <AddBoxIcon />
        </NavLink>
      </IconButton>
      <IconButton aria-label="check-out-cart">
        <NavLink to="/cart">
          {list.length}
          <ShoppingCartIcon />
        </NavLink>
      </IconButton>
      <IconButton aria-label="clear-cart" onClick={clearCart}>
        <RemoveShoppingCartIcon />
      </IconButton>
    </Header>
  );
};
