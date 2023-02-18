import React from 'react';

type TaskType = {
  id: number
  title: string
  isDone: bollean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: Function
}

export function Todolist (props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {
          props.tasks.map(task => <li>
            <input type='checkbox' defaultChecked={task.isDone} />
            <span>{task.title}</span>
            <button onClick={() => {
              props.removeTask(task.id)
            } } >x</button>
          </li>)
        }
      </ul>
    </div>
  )
}