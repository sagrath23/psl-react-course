import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

export const Form = ({ confirmAction }) => {
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
      <TextField id="product-name" label="Name" onChange={setName} />
      <TextField id="product-description" label="Description" multiline onChange={setDescription} />
      <TextField id="product-price" label="Price" onChange={setPrice} type="number"/>
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