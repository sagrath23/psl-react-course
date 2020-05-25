import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Cart, ProductDetail, ProductList } from '../pages';
import { CartHeader } from '../components/CartHeader';

export const Layout = () => (
  <>
    <CartHeader />
    <Switch>
      <Route path="/cart" component={Cart} />
      <Route path="/products/:productId" component={ProductDetail} />
      <Route exact path="/" component={ProductList} />
    </Switch>
  </>
);
