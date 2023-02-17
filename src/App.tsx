import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todolist />
    </div>
  );
}

function Todolist () {
  return (
    <div>
      <h3>What to learn</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          <li><input type='checkbox' checked={true} /><span>HTML</span></li>
          <li><input type='checkbox' checked={true} /><span>CSS</span></li>
          <li><input type='checkbox' checked={true} /><span>JavaScript</span></li>
          <li><input type='checkbox' checked={false} /><span>react</span></li>
          <li><input type='checkbox' checked={false} /><span>redux</span></li>
          <li><input type='checkbox' checked={false} /><span>TypeScript</span></li>
        </ul>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
  );
}

export default App;
