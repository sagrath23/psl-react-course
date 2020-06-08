import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Form } from '../basic/Form';
import { actions } from '../../store/domains';
import { productCategoriesSelector } from '../../store/selectors';


export const AddProductForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(productCategoriesSelector);
  const addProduct = (product) => dispatch(actions.addNewProduct(product));

  return (
    <Form confirmAction={addProduct}>
      <Select
        id="demo-simple-select"
        onChange={() => {}}
      >
        {categories.map((category) => <MenuItem value={category}>{category}</MenuItem>)}
      </Select>
    </Form>
  );
};
