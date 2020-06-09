import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { productListSelector, isLoadingProductListSelector } from '../store/selectors';
import { actions } from '../store/domains';

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector(productListSelector);

  console.log(products, 'here');

  const isLoading = useSelector(isLoadingProductListSelector);
  const product = products.find((product) => `${product.id}` === productId) || { name: '', price: 0, category: '', description: '' }

  useEffect(() => {
    if (products.length === 0) {
      dispatch(actions.productListRequest());
    }
  }, [products]);

  return (
    <Card style={{ maxWidth: '350px' }}>
      <CardHeader title="PRODUCT DETAIL" subheader={product.name}>
      </CardHeader>
      <img src={`https://fakeimg.pl/350x200/?text=${product.name}&font=lobster`} alt={product.name} />
      <CardContent>
        <div>ID: {productId}</div>
        {isLoading ?
          <CircularProgress /> :
          <>
            <div><b>Name:</b> {product.name}</div>
            <div><b>Price:</b> {product.price}</div>
            <div><b>Category:</b> {product.category}</div>
            <div><b>Description:</b> {product.description}</div>
          </>
        }
      </CardContent>
    </Card>
  );
};
