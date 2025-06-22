import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders todo list with initial empty state', () => {
    render(<TodoList />);
    const title = screen.getByText('ToDoリスト');
    expect(title).toBeInTheDocument();
    
    const input = screen.getByTestId('todo-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('追加');
    
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Task')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('adds todo item on form submit', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const form = input.closest('form')!;
    
    fireEvent.change(input, { target: { value: 'Submit Task' } });
    fireEvent.submit(form);
    
    expect(screen.getByText('Submit Task')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    const addButton = screen.getByText('追加');
    
    fireEvent.click(addButton);
    
    const todoItems = screen.queryAllByTestId('todo-item');
    expect(todoItems).toHaveLength(0);
  });

  test('does not add todo with only spaces', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('追加');
    
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    const todoItems = screen.queryAllByTestId('todo-item');
    expect(todoItems).toHaveLength(0);
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('追加');
    
    // Add a todo
    fireEvent.change(input, { target: { value: 'Toggle Task' } });
    fireEvent.click(addButton);
    
    const todoItem = screen.getByTestId('todo-item');
    const checkbox = todoItem.querySelector('input[type="checkbox"]')!;
    
    expect(todoItem).not.toHaveClass('completed');
    expect(checkbox).not.toBeChecked();
    
    // Toggle completion
    fireEvent.click(checkbox);
    expect(todoItem).toHaveClass('completed');
    expect(checkbox).toBeChecked();
    
    // Toggle back
    fireEvent.click(checkbox);
    expect(todoItem).not.toHaveClass('completed');
    expect(checkbox).not.toBeChecked();
  });

  test('deletes todo item', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('追加');
    
    // Add a todo
    fireEvent.change(input, { target: { value: 'Delete Task' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Delete Task')).toBeInTheDocument();
    
    // Delete the todo
    const deleteButton = screen.getByText('削除');
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Delete Task')).not.toBeInTheDocument();
  });

  test('manages multiple todos', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('追加');
    
    // Add multiple todos
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    tasks.forEach(task => {
      fireEvent.change(input, { target: { value: task } });
      fireEvent.click(addButton);
    });
    
    // Verify all todos are present
    tasks.forEach(task => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
    
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems).toHaveLength(3);
    
    // Delete the middle one
    const deleteButtons = screen.getAllByText('削除');
    fireEvent.click(deleteButtons[1]);
    
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });
});
