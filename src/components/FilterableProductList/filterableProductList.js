import React from 'react';
import { ProductListTable } from '../ProductListTable';
import { SearchBar } from '../SearchBar';

export const FilterableProductList = () => (
  <div>
    <SearchBar />
    <ProductListTable />
  </div>
);
