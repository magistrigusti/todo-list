import { useState } from 'react';
import { Todolist } from './Todolist';
import  {TaskType} from './Todolist';
import './App.css';

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'CSS', isDone: true},
    {id: 3, title: 'JavaScript', isDone: true},
    {id: 4, title: 'React', isDone: true},
    {id: 5, title: 'Redux', isDone: false},
    {id: 6, title: 'TypeScript', isDone: false}
  ]);

  let [filter, setFilter] = useState<FilterValuesType>('all');
  function removeTask (id: number) {
    let filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodolist = tasks;
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter(task => task.isDone === true)
  }

  if (filter === 'active') {
    tasksForTodolist = tasks.filter(task => task.isDone === false)
  }

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasksForTodolist} removeTask={ removeTask } changeFilter={ changeFilter } />
    </div>
  )
}

export default App;