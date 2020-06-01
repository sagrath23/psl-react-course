import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '../basic/Form';
import { actions } from '../../store/domains';

export const AddProductForm = () => {
  const dispatch = useDispatch();
  const addProduct = (product) => dispatch(actions.addNewProduct(product));

  return (
    <Form confirmAction={addProduct} />
  );
};
