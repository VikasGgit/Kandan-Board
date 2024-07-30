import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Board from './components/Board';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Provider store={store}>
      <div className="app">
        <SearchBar />
        <Board />
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
        <TaskForm open={open} handleClose={handleClose} />
      </div>
    </Provider>
  );
};

export default App;
