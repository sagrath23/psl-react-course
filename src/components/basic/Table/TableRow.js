import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import MUITableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import { cartSelector } from '../../../store/selectors';
import { actions } from '../../../store/domains'; 

export const TableRow = ({ product }) => {
  // TODO: this should be a injected component, to separate 
  // table component from redux interaction
  const dispatch = useDispatch();
  const selectedProducts = useSelector(cartSelector);
  const selected = selectedProducts.find((selectedProduct) => product.name === selectedProduct.name);
  const ColorSpan = styled.span`
    color: ${!product.stocked ? "#aa00ff" : "inherit"};
    font-style: ${!product.stocked ? "italic" : "normal"};
  `;
  const toggleProductSelection = () =>{
    const actionToDispatch = selected ? actions.removeProductFromCart : actions.addProductToCart;

    dispatch(actionToDispatch(product));
  };

  return (
    <MUITableRow key={product.name}>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <Checkbox
          checked={selected}
          color="primary"
          disabled={!product.stocked}
          onChange={toggleProductSelection}
        />
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan>{product.name}</ColorSpan>
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan>{product.price}</ColorSpan>
      </TableCell>
    </MUITableRow>
  );
};

TableRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    stocked: PropTypes.bool
  })
};

TableRow.defaultProps = {
  product: {}
};
