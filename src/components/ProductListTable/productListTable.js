import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from '../../selectors';
import { actions } from '../../store/domains';
import { FilterContext } from '../../pages';

export const ProductListTable = () => {
  const dispatch = useDispatch();
  const list = useSelector(productListSelector);
  const context = useContext(FilterContext);

  useEffect(() => {
    dispatch(actions.productListRequest());
  }, [dispatch]);

  return (<div>Table goes here</div>)
};
