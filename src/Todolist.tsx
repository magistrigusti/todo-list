import { FilterValuesType } from './App';
import { useState } from 'react';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
}

export function Todolist (props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input defaultValue={newTaskTitle} 
            onChange={ (event) => { 
              setNewTaskTitle(event.currentTarget.value) 
            } }
            onKeyPress={(event)=>{
              if (event.charCode === 13) {
                props.addTask(newTaskTitle);
                setNewTaskTitle('');
              }
            }}
            />

        <button onClick={()=>{
          props.addTask(newTaskTitle);
          setNewTaskTitle('');
        }}>+</button>
      </div>
      <ul>
        {
          props.tasks.map(task => <li key={task.id}>
            <input type='checkbox' defaultChecked={task.isDone} />
            <span>{task.title}</span>
            <button onClick={()=>{props.removeTask(task.id)}} >x</button>
          </li>)
        }
      </ul>
      <div>
        <button onClick={()=>{props.changeFilter('all')}}>All</button>
        <button onClick={()=>{props.changeFilter('active')}}>Active</button>
        <button onClick={()=>{props.changeFilter('completed')}}>Completed</button>
      </div>
    </div>
  )
}