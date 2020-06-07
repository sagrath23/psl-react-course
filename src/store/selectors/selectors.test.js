import * as selectors from '../selectors';

describe('selectors tests', () => {
  describe('productListSelector', () => {
    test('should return the expected value', () => {
      const list = ['item'];
      const state = {
        productList: {
          list
        }
      };

      expect(selectors.productListSelector(state)).toEqual(list);
    });
  });

  describe('cartSelector', () => {
    test('should return the expected value', () => {
      const list = ['item'];
      const state = {
        cart: {
          list
        }
      };

      expect(selectors.cartSelector(state)).toEqual(list);
    });
  });

  describe('totalSelector', () => {
    test('should return the expected value', () => {
      const list = [{ price: '$10'}, { price: '$20' }, { price: '$20' }];
      const state = {
        cart: {
          list
        }
      };

      expect(selectors.totalSelector(state)).toEqual(50);
    });
  });

  describe('groupedProductListSelector', () => {
    test('should return the expected value', () => {
      const list = [
        { id: '1', category: 'cat-1' },
        { id: '2', category: 'cat-2' },
        { id: '3', category: 'cat-1' }
      ];
      const state = {
        productList: {
          list
        }
      };

      expect(selectors.groupedProductListSelector(state)).toEqual({
        'cat-1': [{ id: '1', category: 'cat-1' }, { id: '3', category: 'cat-1' }],
        'cat-2': [{ id: '2', category: 'cat-2' }]
      });
    });
  });
});
