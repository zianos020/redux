import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/action/Action';
import { Button, Form } from 'react-bootstrap';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask({ id: Math.random(), text, isDone: false }));
      setText('');
    } else {
      alert("You can't add an empty task");
    }
  };

  return (
    <div>
      <Form onSubmit={handleAdd} className='add-task-container'>
        <Form.Control
          className='input-task'
          type='text'
          placeholder='Enter your task'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button variant="primary" onClick={handleAdd}>Add</Button>
      </Form>
    </div>
  );
};

export default AddTask;
