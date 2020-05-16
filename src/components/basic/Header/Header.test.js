import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { renderRoutingComponent } from '../../../utils/tests';
import { Header } from './Header';

describe('Header component', () => {
  const baseProps = {
    selected: [],
    clearCart: jest.fn()
  }

  describe('when no selected elements are provided', () => {
    test('should display the correct number of selected items', () => {
      renderRoutingComponent(Header, baseProps);
  
      const counterElement = screen.getByText('0');
  
      expect(counterElement).toBeInTheDocument();
    });

    test('should not call clearCart function when "Clear Cart" button is clicked', () => {
      renderRoutingComponent(Header, baseProps);
  
      userEvent.click(screen.getByText('X').closest('button'));
  
      expect(baseProps.clearCart).toBeCalledTimes(0);
    });
  });

  describe('when selected elements are provided', () => {
    test('should not call clearCart function when "Clear Cart" button is clicked', () => {
      renderRoutingComponent(Header, {
        ...baseProps,
        selected: [{ foo: 'bar' }]
      });
  
      userEvent.click(screen.getByText('X').closest('button'));
  
      expect(baseProps.clearCart).toBeCalledTimes(1);
    });
  });
});