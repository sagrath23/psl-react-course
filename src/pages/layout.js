import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  AddProduct,
  Cart,
  ProductDetail,
  ProductList
} from '../pages';
import { CartHeader } from '../components/CartHeader';

export const Layout = () => (
  <>
    <CartHeader />
    <Switch>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/products/:productId" component={ProductDetail} />
      <Route exact path="/add-product" component={AddProduct} />
      <Route exact path="/" component={ProductList} />
    </Switch>
  </>
);
