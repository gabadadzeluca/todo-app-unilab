import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
import StartingScreen from './components/startingScreen/StartingScreen';
import LoginForm from './components/loginForm/LoginForm';
import TaskContainer from './components/tasksPage/TaskPageBody/taskContainer/TaskContainer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem('user') !== null);
  console.log("IS LOGGED IN:", isLoggedIn);
  return (
    <div className='Container'>
      <BrowserRouter basename='/todo-app-unilab/'>
        <Routes>
          <Route path="/" element={<StartingScreen />} />
          <Route path="/login" element={
            isLoggedIn ? 
              <Navigate to="/tasks" />
                : 
              <LoginForm setIsLoggedIn={setIsLoggedIn} /> 
            } 
          />
          <Route path="/tasks" element={isLoggedIn ? <TaskContainer /> : <Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
