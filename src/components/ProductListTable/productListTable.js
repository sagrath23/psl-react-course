import React from 'react';
import PropTypes from 'prop-types';

export const ProductListTable = ({ groupedProducts }) => {
  for (let category in groupedProducts) {
    console.log(category);
  }

  return (<div>Here</div>)
};

ProductListTable.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  }))
};

ProductListTable.defaultProps = {
  productList: []
};
