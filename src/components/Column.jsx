import React from 'react';
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { moveTask } from '../redux/taskSlice';

const Column = ({ status, tasks }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      dispatch(moveTask({ taskId: item.id, newStatus: status }));
    },
  });

  return (
    <div className="column" ref={drop}>
      <h2>{status}</h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
};

export default Column;
