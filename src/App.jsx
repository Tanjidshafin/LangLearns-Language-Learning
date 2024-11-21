import { useState } from 'react';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import StartLearning from './pages/StartLearning';
import Home from './pages/Home';
import Footer from './components/Footer';
import EachLesson from './pages/EachLesson';
import Tutorials from './pages/Tutorials';
import AboutUs from './pages/AboutUs';
import PrivateRoute from './privateRoute/PrivateRoute';

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
        <Route
          path='/Lesson/:lessonNo'
          element={
            <PrivateRoute>
              <EachLesson />
            </PrivateRoute>
          }
        />
        <Route
          path='/Tutorials'
          element={
            <PrivateRoute>
              <Tutorials />
            </PrivateRoute>
          }
        />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
