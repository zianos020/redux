import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask } from '../../Redux/action/Action';
import Edit from '../Edit/Edit';
import { Button } from 'react-bootstrap';
import './Task.css'

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span className={task.isDone ? "done" : null}>{task.text}</span>
      <Edit task={task} /> 
      <Button  onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
      <Button  onClick={() => dispatch(doneTask(task.id))}> {task.isDone ? "Undone" : "Done"} </Button>
    </div>
  );
};

export default Task;
