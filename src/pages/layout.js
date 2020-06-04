import React, { createContext, useState } from 'react';
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

export const PageContext = createContext({ pageContext: {}, filterContext: {}, setFilterContext: () => {}});

export const Layout = () => {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const [filterContext, setFilterContext] = useState({ inStock: false, productName: '' });
  // TODO: improve context structure (moving setFilterContext inside  a proper property)
  const pageContextValue = {
    pageContext: {
      isSidebarOpen,
      toggleSidebar
    },
    filterContext,
    setFilterContext
  };

  return (
    <>
      <CssBaseline />
      <PageContext.Provider value={pageContextValue}>
        <CartHeader />
        <CartSidebar />
        <Container maxWidth="xl">
          <Switch>
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/products/:productId" component={ProductDetail} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route exact path="/" component={ProductList} />
          </Switch>
        </Container>
      </PageContext.Provider>
    </>
  );
};
