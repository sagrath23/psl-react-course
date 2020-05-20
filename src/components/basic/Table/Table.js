import React from 'react';
import PropTypes from 'prop-types';
import MUITable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { TableCategoryRow } from './TableCategoryRow';
import { TableRow } from './TableRow';

const renderProductsRows = (groupedProducts) => {
  const items = [];

  for(let category in groupedProducts) {
    items.push((
      <>
        <TableCategoryRow name={category} />
        {groupedProducts[category].map((product) => (
          <TableRow product={product} />
        ))}
      </>
    ));
  }

  return items;
};
// TODO: add load indicator
export const Table = ({ groupedProducts }) => {
  const items = renderProductsRows(groupedProducts);
  return (
    <MUITable>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => item)}
      </TableBody>
    </MUITable>
  )
};

Table.propTypes = {
  groupedProducts: PropTypes.object
};

Table.defaultProps = {
  groupedProducts: {}
};
