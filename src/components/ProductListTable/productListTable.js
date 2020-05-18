import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from '../../selectors';
import { actions } from '../../store/domains';

export const ProductListTable = () => {
  const dispatch = useDispatch();
  const list = useSelector(productListSelector);

  console.log(list);

  useEffect(() => {
    dispatch(actions.productListRequest());
  }, [dispatch]);

  return (<div>Table goes here</div>)
};
