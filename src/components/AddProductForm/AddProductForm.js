import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { Form } from '../basic/Form';
import { actions } from '../../store/domains';
import { newProductIdSelector, productCategoriesSelector } from '../../store/selectors';

export const AddProductForm = () => {
  const dispatch = useDispatch();
  const newProductId = useSelector(newProductIdSelector);
  const categories = useSelector(productCategoriesSelector);
  const [product, setProduct] = useState({ id: newProductId });
  const setProductAttribute = (attribute) => (event) => {
    setProduct({
      ...product,
      [attribute]: attribute !== 'stocked' ? event.target.value : event.target.checked 
    });
  };
  const addProduct = (product) => dispatch(actions.addNewProduct({ ...product, price: `$${product.price}`}));
  // TODO: check how to clear category and stocked elements when clear form is triggered
  const clearForm = () => {
    setProduct({ 
      id: newProductId,
      name: '',
      description: '',
      price: '',
      stocked: false
    });
  };

  return (
    <Form>
      <FormControl fullWidth variant="filled">
        <InputLabel htmlFor="filled-adornment-name">Name</InputLabel>
        <FilledInput
          id="filled-adornment-name"
          value={product.name}
          onChange={setProductAttribute('name')} 
        />
      </FormControl>
      <FormControl fullWidth variant="filled">
        <InputLabel htmlFor="filled-adornment-description">Description</InputLabel>
        <FilledInput
          id="filled-adornment-description"
          value={product.description}
          onChange={setProductAttribute('description')} 
        />
      </FormControl>
      <FormControl fullWidth variant="filled">
        <InputLabel htmlFor="filled-adornment-price">Price</InputLabel>
        <FilledInput
          id="filled-adornment-price"
          value={product.price}
          onChange={setProductAttribute('price')} 
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth variant="filled">
        <InputLabel htmlFor="filled-adornment-category">Category</InputLabel>
        <Select
          id="demo-simple-select"
          onChange={setProductAttribute('category')}
        >
          {categories.map((category) => <MenuItem value={category}>{category}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Switch
            onChange={setProductAttribute('stocked')}
            name="checkedB"
            color="primary"
          />
        }
        label="Stocked"
      />
      <Button onClick={() => addProduct(product)} variant="contained" color="primary">
        Add
      </Button>
      <Button onClick={clearForm} variant="outlined" color="default">
        Clear
      </Button>
    </Form>
  );
};
