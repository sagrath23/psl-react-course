import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { PageContext } from '../../pages';

// TODO: move this to a config file or something common for all the app
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

export const CartSidebar = () => {
  const { pageContext: { isSidebarOpen, toggleSidebar } } = useContext(PageContext);
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleDrawerClose = () => toggleSidebar(!isSidebarOpen);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpen,
        [classes.drawerClose]: !isSidebarOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isSidebarOpen,
          [classes.drawerClose]: !isSidebarOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {isSidebarOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key="add-button">
          <ListItemIcon><AddIcon /></ListItemIcon>
          <ListItemText primary="Add Product" />
        </ListItem>
        <ListItem button key="cart-button">
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Shopping Cart" />
        </ListItem>
        <ListItem button key="clear-button">
          <ListItemIcon><CloseIcon /></ListItemIcon>
          <ListItemText primary="Clear Cart" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

CartSidebar.propTypes = {
  isSidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func
};

CartSidebar.defaultProps = {
  isSidebarOpen: false,
  toggleSidebar: () => {}
};
