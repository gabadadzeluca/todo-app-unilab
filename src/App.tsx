import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem('isLoggedIn') === 'true');
  console.log("IS LOGGED IN:", isLoggedIn);

  const handleLogin = (isLoggedIn:boolean):void =>{
    setIsLoggedIn(isLoggedIn);
  }

  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/main" /> : <div>NOT LOGGED IN</div>} />
        <Route path="/sign_in" element={isLoggedIn ? <div>TEST</div> : <Navigate to="/" />} />
        <Route path="/tasks" element={isLoggedIn ? <>TASKS</> : <Navigate to="/"/> } />
    </Routes>
   </BrowserRouter>
  )
}

export default App
