import React from 'react';
import Column from './Column';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Board = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board">
        {['To Do', 'In Progress', 'Peer Review', 'Done'].map((status) => (
          <Column key={status} status={status} tasks={filteredTasks} />
        ))}
      </div>
    </DndProvider>
  );
};

export default Board;
