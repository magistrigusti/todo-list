import { FilterValuesType } from './App';
import { KeyboardEvent, ChangeEvent, useState } from 'react';

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

  const onNewTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.currentTarget.value)
  }

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      props.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  }

  const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle('');
  }

  const onClickAllHandler = () => props.changeFilter('all');
  const onClickActiveHandler = () => props.changeFilter('active');
  const onClickCompletedHandler = () => props.changeFilter('completed');

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input defaultValue={newTaskTitle} 
            onChange={ onNewTitleChangeHandler }
            onKeyPress={ onKeyPressHandler }
            />

        <button onClick={ addTask }>+</button>
      </div>
      <ul>
        {
          props.tasks.map(task => {
            const onRemoveHandler = () => {
              props.removeTask(task.id)
            }
            return (
              <li key={task.id}>
                <input type='checkbox' defaultChecked={task.isDone} />
                <span>{task.title}</span>
                <button onClick={ onRemoveHandler }>x</button>
              </li>
            )
          })
        }
      </ul>
      <div>
        <button onClick={ onClickAllHandler }>All</button>
        <button onClick={ onClickActiveHandler }>Active</button>
        <button onClick={ onClickCompletedHandler }>Completed</button>
      </div>
    </div>
  )
}