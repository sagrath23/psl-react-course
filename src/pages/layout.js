import React, { createContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
  }
}));

export const Layout = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
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
    <div className={classes.root}>
      <CssBaseline />
      <PageContext.Provider value={pageContextValue}>
        <CartHeader />
        <CartSidebar />
        <Container className={classes.content} maxWidth="xl">
          <Switch>
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/products/:productId" component={ProductDetail} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route exact path="/" component={ProductList} />
          </Switch>
        </Container>
      </PageContext.Provider>
    </div>
  );
};
