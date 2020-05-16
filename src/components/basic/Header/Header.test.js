import { screen, fireEvent } from '@testing-library/react';
import { renderRoutingComponent } from '../../../utils/tests';
import { Header } from './Header';

describe('Header component', () => {
  const baseProps = {
    selected: [],
    clearCart: jest.fn()
  }

  test('should display the correct number of selected items', () => {
    renderRoutingComponent(Header, baseProps);

    const counterElement = screen.getByText('0');

    expect(counterElement).toBeInTheDocument();
  });

  test('should call clearCart function when "Clear Cart" button is clicked', () => {
    renderRoutingComponent(Header, baseProps);

    const button = screen.getByRole('button', { name: 'X' });

    console.log(button);

    fireEvent.click(button);

    expect(baseProps.clearCart).toBeCalledTimes(1);
  });
});