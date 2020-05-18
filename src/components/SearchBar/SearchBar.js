import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { FilterContext } from '../../pages';

export const SearchBar = () => {
  const { filterContext, setFilterContext } = useContext(FilterContext);
  const [filterText, setFilterText] = useState(filterContext.productName);
  const [isStockOnly, setIsStockOnly] = useState(filterContext.inStock);
  const filterValueChanged = (event) => {
    // extract value from input event
    const value = event.target.value;
    // set value for SearchBar
    setFilterText(value);
    // set new value for context
    setFilterContext({
      ...filterContext,
      productName: value
    });
  };
  const stockOnlyValueChanged = () => {
    const value = !isStockOnly;
    // set check value
    setIsStockOnly(value);
    // set new value for context
    setFilterContext({
      ...filterContext,
      inStock: value
    });
  };

  return (
    <form>
      <TextField
        label="Search Product"
        variant="filled"
        value={filterText}
        type="text"
        onChange={filterValueChanged}
        fullWidth
      />
      <br />
      <Checkbox
        color="primary"
        checked={isStockOnly}
        onChange={stockOnlyValueChanged}
      />
      Only show products in stock
    </form>
  )
}