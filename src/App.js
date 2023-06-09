import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />}/>
          <Route path='/create-task' element={<TaskForm />}/>
          <Route path='/edit-task/:id' element={<TaskForm />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
