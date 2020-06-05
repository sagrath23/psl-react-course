import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import MUITableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import { cartSelector } from '../../../store/selectors';
import { actions } from '../../../store/domains'; 

const ColorSpan = styled.span`
    color: ${(props) => !props.stocked ? "#aa00ff" : "inherit"};
    font-style: ${(props) => !props.stocked ? "italic" : "normal"};
  `;

export const TableRow = ({ product }) => {
  // TODO: this should be a injected component, to separate 
  // table component from redux interaction
  const dispatch = useDispatch();
  const selectedProducts = useSelector(cartSelector);
  const selected = selectedProducts.find((selectedProduct) => product.name === selectedProduct.name);
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
        <ColorSpan stocked={product.stocked}>{product.name}</ColorSpan>
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan stocked={product.stocked}>{product.price}</ColorSpan>
      </TableCell>
    </MUITableRow>
  );
};

TableRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    stocked: PropTypes.bool
  })
};

TableRow.defaultProps = {
  product: {}
};
