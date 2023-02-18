import React from 'react';
import {Todolist} from './Todolist';
import './App.css';

function App() {

  let tasks = [
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'CSS', isDone: true},
    {id: 3, title: 'JavaScript', isDone: true},
    {id: 4, title: 'React', isDone: true},
    {id: 5, title: 'Redux', isDone: false},
    {id: 6, title: 'TypeScript', isDone: false}
  ]

  function removeTask(id: number) {
    let resultTasks = tasks.filter( () => {} )
  }

  return (
    <div className="App">
      <Todolist title='What to learn' tasks={tasks} />

      <input type='checked' />
      <input type='date' />
      <input type='magistrigusti' />
    </div>
  );
}


export default App;
