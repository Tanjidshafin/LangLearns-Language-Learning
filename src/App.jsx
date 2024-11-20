import { useState } from 'react';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import StartLearning from './pages/StartLearning';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/StartLearning' element={<StartLearning />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
