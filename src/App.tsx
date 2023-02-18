import * as React from 'react';
import { useState } from 'react'
import {Todolist} from './Todolist';
import './App.css';

function App() {

  let initTasks = [
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'CSS', isDone: true},
    {id: 3, title: 'JavaScript', isDone: true},
    {id: 4, title: 'React', isDone: true},
    {id: 5, title: 'Redux', isDone: false},
    {id: 6, title: 'TypeScript', isDone: false}
  ]

  let arr = useState(initTasks);

  let tasks = arr[0];
  let setTasks = arr[1];

  function removeTask(id: number) {
    let filteredTasks = tasks.filter( task => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <Todolist title='What to learn' tasks={tasks} removeTask={ removeTask } />

      <input type='checked' />
      <input type='date' />
      <input type='magistrigusti' />
    </div>
  );
}


export default App;
