import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React Testing Sample header', () => {
  render(<App />);
  const headerElement = screen.getByText(/React Testing Sample/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders calculator component', () => {
  render(<App />);
  const calculatorTitle = screen.getByText(/電卓/i);
  expect(calculatorTitle).toBeInTheDocument();
});

test('renders todo list component', () => {
  render(<App />);
  const todoTitle = screen.getByText(/ToDoリスト/i);
  expect(todoTitle).toBeInTheDocument();
});
