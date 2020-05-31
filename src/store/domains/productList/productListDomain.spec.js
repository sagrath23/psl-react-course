import { actions, initialState, reducer } from '../productList';

describe('productListDomain', () => {
  describe('actions', () => {
    test(`${[actions.addNewProduct]} action should return the proper action object`, () => {
      const product = { name: 'test product' };
      const action = actions.addNewProduct(product);

      expect(action).toEqual({
        payload: { product },
        type: `${[actions.addNewProduct]}`
      });
    });

    test(`${[actions.productListRequest]} action should return the proper action object`, () => {
      const action = actions.productListRequest();

      expect(action).toEqual({
        type: `${[actions.productListRequest]}`
      });
    });

    test(`${[actions.productListSuccess]} action should return the proper action object`, () => {
      const list = [{ name: 'test product' }];
      const action = actions.productListSuccess(list);

      expect(action).toEqual({
        payload: { list },
        type: `${[actions.productListSuccess]}`
      });
    });

    test(`${[actions.productListFailed]} action should return the proper action object`, () => {
      const action = actions.productListFailed();

      expect(action).toEqual({
        type: `${[actions.productListFailed]}`
      });
    });
  });

  describe('reducer', () => {
    test('should return the same state if a valid action is not provided', () => {
      expect(reducer(initialState, { type: 'random action' })).toEqual(initialState);
    });
  });
});
