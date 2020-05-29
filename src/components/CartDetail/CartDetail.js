import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { cartSelector, totalSelector } from '../../store/selectors';

export const CartDetail = () => {
  const selectedProducts = useSelector(cartSelector);
  const total = useSelector(totalSelector);
  const renderEmptyCart = () => (
    <div>Your cart is Empty</div>
  );
  const renderSelectedProducts = () => (
    <div>
      {selectedProducts.map(product => (
        <div key={`${product.id}_cart`}>{`${product.name} - ${product.price}`}</div>
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
          <div>Cart:</div>
          {shouldRenderEmptyCart ? renderEmptyCart() : renderSelectedProducts()}
        </CardContent>
      </Card>
    </div>
  );
};
