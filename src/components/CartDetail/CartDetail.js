import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { cartSelector, totalSelector } from '../../store/selectors';
import { actions } from '../../store/domains';

export const CartDetail = () => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(cartSelector);
  const total = useSelector(totalSelector);
  const handleRemoveProductAction = (product) => () => dispatch(actions.removeProductFromCart(product));
  const renderEmptyCart = () => (
    <div>Your cart is Empty</div>
  );
  const renderSelectedProducts = () => (
    <div>
      {selectedProducts.map(product => (
        <ListItem key={`${product.id}_cart`}>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${product.name} - ${product.price}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={handleRemoveProductAction(product)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <div><b>Total: ${total}</b></div>
    </div>
  );
  const shouldRenderEmptyCart = selectedProducts.length === 0;

  return (
    <div className="App-container">
      <Card style={{ maxWidth: '350px' }}>
        <CardHeader title="PRODUCT CART" subheader="">
        </CardHeader>
        <img src={`https://fakeimg.pl/350x200/?text=SelectedProducts&font=lobster`} alt="Selected Products" />
        <CardContent>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              Cart
            </Typography>
            <div>
              <List>
                {shouldRenderEmptyCart ? renderEmptyCart() : renderSelectedProducts()}
              </List>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
