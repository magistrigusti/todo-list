import { useState } from 'react';
import { TaskType, Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

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
    let filtered
  }
}