import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  AddProduct,
  Cart,
  ProductDetail,
  ProductList
} from '../pages';
import { CartHeader } from '../components/CartHeader';
import { CartSidebar } from '../components/CartSidebar';

export const Layout = () => {
  const [isSidebarOpen, toggleSidebar] = useState(false);

  return (
    <>
      <CssBaseline />
      <CartHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <CartSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Container maxWidth="xl">
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products/:productId" component={ProductDetail} />
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/" component={ProductList} />
        </Switch>
      </Container>
    </>
  );
};
