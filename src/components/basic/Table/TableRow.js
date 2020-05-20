import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import MUITableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import { cartSelector } from '../../../selectors';

export const TableRow = ({ product }) => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(cartSelector);
  const selected = selectedProducts.includes(product.name)
  const ColorSpan = styled.span`
    color: ${!product.stocked ? "#aa00ff" : "inherit"};
    font-style: ${!product.stocked ? "italic" : "normal"};
  `;

  // onChange={() => selected ? onUnselect(product) : onSelect(product)}
  
  return (
    <MUITableRow key={product.name}>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <Checkbox
          checked={selected}
          color="primary"
          disabled={!product.stocked}
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
