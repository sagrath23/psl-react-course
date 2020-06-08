import React, { Childre, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

export const Form = ({ children, confirmAction }) => {
  const [product, setProduct] = useState({});
  const setName = (event) => {
    setProduct({
      ...product,
      name: event.target.value
    });
  };
  const setDescription = (event) => {
    setProduct({
      ...product,
      description: event.target.value
    });
  };
  const setPrice = (event) => {
    setProduct({
      ...product,
      price: event.target.value
    });
  }


  return (
    <FormControl>
      {children}
      <TextField id="product-name" label="Name" onChange={setName} />
      <TextField id="product-description" label="Description" multiline onChange={setDescription} />
      <TextField id="product-price" label="Price" onChange={setPrice} type="number"/>
      <FormControlLabel control={
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product.category}
          onChange={() => {}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>}
        label="Category"
      />
      <FormControlLabel
        control={
          <Switch
            checked={false}
            onChange={() => {}}
            name="checkedB"
            color="primary"
          />
        }
        label="Stocked"
      />
      <Button onClick={() => confirmAction(product)} variant="contained" color="primary">
        Add
      </Button>
      <Button variant="outlined" color="default">
        Clear
      </Button>
    </FormControl>
  );
};

Form.propTypes = {
  confirmAction: PropTypes.func
};

Form.defaultTypes = {
  confirmAction: () => {}
};


/**
id	1
category	"Sporting Goods"
price	"$49.99"
stocked	true
name	"Football"
description	"Footbal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 


 */