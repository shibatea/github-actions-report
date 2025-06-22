import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Testing Sample</h1>
      </header>
      <main className="App-main">
        <Calculator />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
