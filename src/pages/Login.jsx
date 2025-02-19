import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase.init';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Login = () => {
  const { setUser, user } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (user) {
    navigate('/', { replace: true });
    return null;
  }

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      toast.success(`Welcome Back, ${user.displayName}`);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);

      toast.success(`Welcome Back, ${user.displayName}`);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Failed to sign in. Please check your email and password.');
    }
  };

  return (
    <div className='mx-auto max-w-screen-xl flex justify-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16'>
        <div className='flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12'>
          <div className='mb-8 w-full sm:mb-0 sm:w-1/2'>
            <h2 className='mb-6 text-3xl font-semibold tracking-tight'>
              Sign In
            </h2>

            {error && <p className='text-red-500'>{error}</p>}

            <form onSubmit={handleEmailSignIn}>
              <div className='mb-4 flex flex-col space-y-4'>
                <input
                  className='flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1'
                  placeholder='Email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  className='flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1'
                  placeholder='Password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className='mb-6 flex items-center space-x-2 accent-sky-600'>
                <input type='checkbox' id='keep_signed_in' />
                <label
                  className='select-none text-sm font-medium'
                  htmlFor='keep_signed_in'>
                  Keep me signed in
                </label>
              </div>

              <button
                type='submit'
                className='inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700'>
                Submit
              </button>
            </form>

            <p className='mt-6 flex gap-1 text-sm'>
              Did you
              <a className='text-sky-500 underline' href='#'>
                forget your password?
              </a>
            </p>
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='mb-6 text-sm'>
              If you don't already have an account click the button below to
              create your account.
            </p>

            <NavLink
              to='/Signup'
              className='mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover'>
              Create Account
            </NavLink>

            <p className='my-4 text-center'>OR</p>

            <button
              onClick={handleGoogleSignIn}
              className='flex h-10 w-full items-center justify-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='size-6 fill-current'>
                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
              </svg>
              SIGN IN WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
