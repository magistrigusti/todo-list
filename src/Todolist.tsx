import { FilterValuesType } from './App';
import { KeyboardEvent, ChangeEvent, useState} from 'react';
import classes from './Todolist.module.css';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType ={
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (id: string) => void
}

export function Todolist (props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const onNewTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.currentTarget.value);
  };
  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      props.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };
  const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle('');
  };
  const onClickAllHandler = () => props.changeFilter('all');
  const onClickActiveHandler = () => props.changeFilter('active');
  const onClickCompletedHandler = () => props.changeFilter('completed');

  return (
    <div>
      <h3 className={classes.header_title}>{props.title}</h3>
      <div>
        <input className={classes.input_task} defaultValue={newTaskTitle} onChange={onNewTitleChangeHandler} onKeyPress={onKeyPressHandler} />
        <button className={classes.btn_task} onClick={addTask}>+</button>
      </div>
      <ul>
        {
          props.tasks.map(task => {
            const onRemoveHandler = () => {
              props.removeTask(task.id);
            };
            return (
              <li className={classes.task} key={task.id}>
                <input className={classes.input_check} type='checkbox' defaultChecked={task.isDone}/>
                <span className={classes.task_title}>{task.title}</span>
                <button className={classes.btn_remove} onClick={onRemoveHandler}>x</button>
              </li>
            )
          })
        }
      </ul>
      <div>
        <button className={classes.btn_filter_all} onClick={onClickAllHandler}>All</button>
        <button className={classes.btn_filter_active} onClick={onClickActiveHandler}>Active</button>
        <button className={classes.btn_filter_completed} onClick={onClickCompletedHandler}>Completed</button>
      </div>
    </div>
  )
}