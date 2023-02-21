import { useState } from 'react';
import { v1 } from 'uuid';
import { Todolist, TaskType } from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    {id: v1(), title: 'HTML', isDone: true},
    {id: v1(), title: 'CSS', isDone: true},
    {id: v1(), title: 'JavaScript', isDone: true},
    {id: v1(), title: 'React', isDone: true},
    {id: v1(), title: 'Redux', isDone: false},
    {id: v1(), title: 'TypeScript', isDone: false},
    {id: v1(), title: 'Rest API', isDone: false},
    {id: v1(), title: 'GraphQL', isDone: false}
  ]);
  let [filter, setFilter] = useState<FilterValuesType>('all');

  function removeTask (id: string) {
    let filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function addTask (title: string) {
    let newTask = {id: v1(), title: title, isDone: false};
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks)
  }

  function changeFilter (value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodolist = tasks;
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter(task => task.isDone === true);
  }
  if (filter === 'active') {
    tasksForTodolist = tasks.filter(task => task.isDone === false);
  }

  return (
    <div className='App'>
      <Todolist title='What to learn' tasks={tasksForTodolist} removeTask={ removeTask } changeFilter={ changeFilter } addTask={addTask} />
    </div>
  )
}

export default App;