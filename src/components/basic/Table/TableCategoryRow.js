import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// TODO: add styles
export const TableCategoryRow = ({ name }) => (
  <TableRow key={name}>
    <TableCell colSpan={3} component="td" scope="row">
      {name}
    </TableCell>
  </TableRow>
);

TableCategoryRow.propTypes = {
  name: PropTypes.string
};

TableCategoryRow.defaultProps = {
  name: ''
};
