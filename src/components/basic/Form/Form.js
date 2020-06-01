import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

export const Form = ({ confirmAction }) => {
  const [product, setProduct] = useState({ name: 'Zonas', price: '$100', category: 'Sporting Goods' });
  const setName = (event) => {
    setProduct({
      ...product,
      name: event.target.value
    });
  } 

  return (
    <FormControl>
      <TextField id="standard-basic" label="Name" onChange={setName} />
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
