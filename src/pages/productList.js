import React, { createContext, useState } from 'react';
import { FilterableProductList as ProductListTable } from '../components/FilterableProductList';

export const FilterContext = createContext({ filterContext: {}, setFilterContext: () => {}});

export const ProductList = () => {
  const [filterContext, setFilterContext] = useState({ inStock: false, productName: '' });
  const filterContextValue = {
    filterContext,
    setFilterContext
  };

  return (
    <div>
      <FilterContext.Provider value={filterContextValue}>
        <ProductListTable />
      </FilterContext.Provider>
    </div>
  );
};
