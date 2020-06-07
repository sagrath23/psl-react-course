import { actions, initialState, reducer } from '../cart';

describe('cartDomain', () => {
  const product = { name: 'a-product' };

  describe('actions', () => {
    test(`${actions.addProductToCart} action should return the proper action object`, () => {
      expect(actions.addProductToCart(product)).toEqual({
        payload: { product },
        type: `${actions.addProductToCart}`
      });
    });
    
    test(`${actions.clearCart} action should return the proper action object`, () => {
      expect(actions.clearCart()).toEqual({
        type: `${actions.clearCart}`
      });
    });

    test(`${actions.removeProductFromCart}  action should return the proper action object`, () => {
      expect(actions.removeProductFromCart(product)).toEqual({
        payload: { product },
        type: `${actions.removeProductFromCart}`
      });
    });
  });

  describe('reducer', () => {
    test('should return the same state if a valid action is not provided', () => {
      expect(reducer(initialState, { type: 'random action' })).toEqual(initialState);
    });

    test(`should return the proper state when ${actions.addProductToCart} is provided`, () => {
      expect(reducer(initialState, actions.addProductToCart(product))).toEqual({
        ...initialState,
        list: [product]
      });
    });

    test(`should return the proper state when ${actions.clearCart} is provided`, () => {
      expect(reducer({
        ...initialState,
        list: [product]
      }, actions.clearCart())).toEqual(initialState);
    });

    test(`should return the proper state when ${actions.removeProductFromCart} is provided`, () => {
      expect(reducer({
        ...initialState,
        list: [product]
      }, actions.removeProductFromCart(product))).toEqual(initialState);
    });

  });
});
