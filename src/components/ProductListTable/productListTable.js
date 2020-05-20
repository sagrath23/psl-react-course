import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from '../../selectors';
import { actions } from '../../store/domains';
import { FilterContext } from '../../pages';

export const ProductListTable = () => {
  const dispatch = useDispatch();
  const list = useSelector(productListSelector);
  const { filterContext: { inStock } } = useContext(FilterContext);
  const filteredList = inStock ? list.filter((item) => item.stocked === inStock) : list;

  useEffect(() => {
    dispatch(actions.productListRequest());
  }, [dispatch]);

  return (<div>{filteredList.map((item) => <span>{item.name}</span>)}</div>)
};
