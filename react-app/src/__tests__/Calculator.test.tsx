import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('renders calculator with initial display of 0', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('0');
  });

  test('inputs numbers correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    
    fireEvent.click(screen.getByText('1'));
    expect(display).toHaveTextContent('1');
    
    fireEvent.click(screen.getByText('2'));
    expect(display).toHaveTextContent('12');
    
    fireEvent.click(screen.getByText('3'));
    expect(display).toHaveTextContent('123');
  });

  test('performs addition correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    
    expect(display).toHaveTextContent('8');
  });

  test('performs subtraction correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    
    expect(display).toHaveTextContent('5');
  });

  test('performs multiplication correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('×'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    
    expect(display).toHaveTextContent('12');
  });

  test('performs division correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    
    expect(display).toHaveTextContent('4');
  });

  test('clear button resets calculator', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('C'));
    
    expect(display).toHaveTextContent('0');
  });

  test('handles consecutive operations', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('+'));
    expect(display).toHaveTextContent('5');
    
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(display).toHaveTextContent('9');
  });
});
