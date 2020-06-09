import React, { createContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import {
  AddProduct,
  Cart,
  ProductDetail,
  ProductList
} from '../pages';
import { CartHeader } from '../components/CartHeader';
import { CartSidebar } from '../components/CartSidebar';

export const PageContext = createContext({
  pageContext: {},
  notificationContext: {},
  filterContext: {},
  setFilterContext: () => {}
});

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
  const [isSnackbarOpen, toggleSnackbar] = useState(false);
  const [filterContext, setFilterContext] = useState({ inStock: false, productName: '' });
  // TODO: improve context structure (moving setFilterContext inside  a proper property)
  const pageContextValue = {
    pageContext: {
      isSidebarOpen,
      toggleSidebar
    },
    notificationContext: {
      isSnackbarOpen,
      toggleSnackbar
    },
    filterContext,
    setFilterContext
  };
  const handleSnackbarClose = () => toggleSnackbar(false);

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
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={isSnackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            message="Product added to inventory!"
            action={
              <React.Fragment>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </Container>
      </PageContext.Provider>
    </div>
  );
};
