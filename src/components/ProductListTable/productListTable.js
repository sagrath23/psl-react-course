import React from 'react';
import PropTypes from 'prop-types';

export const ProductListTable = ({ productList }) => (
  <div>{productList.map((item) => <span>{item.name}</span>)}</div>
);

ProductListTable.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  }))
};

ProductListTable.defaultProps = {
  productList: []
};
