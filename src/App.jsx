import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
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
import MyProfile from './pages/MyProfile';
import Error from './components/Error';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className='mt-28'>
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
          <Route
            path='/MyProfile'
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
