import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase.init';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
const SignUp = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const isValidPassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    if (password.length < 8) {
      return false;
    }
    return hasUpperCase && hasLowerCase;
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }
    if (!isValidPassword(password)) {
      setError(
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter.'
      );
      return;
    }
    setName(firstName + lastName);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      const user = userCredential.user;
      toast.success(`Welcome , User`);
      setUser(user);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      toast.success(`Welcome , ${user.displayName}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <section className='bg-white'>
        <div className='lg:grid lg:grid-cols-12'>
          <section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
            <img
              alt=''
              src='https://ec.europa.eu/eurostat/documents/4187653/15349461/Prostock-studio_AdobeStock_437049103_RV.jpg'
              className='absolute brightness-90 inset-0 h-full w-full object-cover opacity-80'
            />

            <div className='hidden lg:relative lg:block lg:p-12'>
              <a className='block text-white' href='#'>
                <span className='sr-only'>Home</span>
                <img
                  className='rounded-full w-14'
                  src='https://w7.pngwing.com/pngs/280/358/png-transparent-ahhaa-logo-service-business-cold-icon-hand-service-room.png'
                  alt=''
                />
              </a>

              <h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
                Join the Journey to Language Mastery
              </h2>

              <p className='mt-4 leading-relaxed text-white/90'>
                Create your account to explore fun and interactive lessons,
                expand your vocabulary, and master a new language. Your journey
                to fluency begins here—sign up and start learning today!
              </p>
            </div>
          </section>

          <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
            <div className='max-w-xl lg:max-w-3xl'>
              <div className='relative -mt-16 block lg:hidden'>
                <a className='inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20'>
                  <img
                    className='rounded-full'
                    src='https://w7.pngwing.com/pngs/280/358/png-transparent-ahhaa-logo-service-business-cold-icon-hand-service-room.png'
                    alt=''
                  />
                </a>

                <h1 className='mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
                  Join the Journey to Language Mastery
                </h1>

                <p className='mt-4 leading-relaxed text-gray-500'>
                  Create your account to explore fun and interactive lessons,
                  expand your vocabulary, and master a new language. Your
                  journey to fluency begins here—sign up and start learning
                  today!
                </p>
              </div>
              <form
                onSubmit={handleSignUp}
                className='mt-8 grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='FirstName'
                    className='block text-sm font-medium text-gray-700'>
                    First Name
                  </label>

                  <input
                    type='text'
                    id='FirstName'
                    name='first_name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='mt-1 w-full pl-2 h-12 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='LastName'
                    className='block text-sm font-medium text-gray-700'>
                    Last Name
                  </label>

                  <input
                    type='text'
                    id='LastName'
                    name='last_name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='mt-1 w-full pl-2 h-12 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div className='col-span-6'>
                  <label
                    htmlFor='Email'
                    className='block text-sm font-medium text-gray-700'>
                    Email
                  </label>

                  <input
                    type='email'
                    id='Email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='mt-1 w-full pl-2 h-12 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='Password'
                    className='block text-sm font-medium text-gray-700'>
                    Password
                  </label>

                  <input
                    type='password'
                    id='Password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='mt-1 w-full pl-2 h-12 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='PasswordConfirmation'
                    className='block text-sm font-medium text-gray-700'>
                    Password Confirmation
                  </label>

                  <input
                    type='password'
                    id='PasswordConfirmation'
                    name='password_confirmation'
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className='mt-1 w-full pl-2 h-12 border-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                {error && (
                  <div className='col-span-6 text-red-500'>{error}</div>
                )}

                <div className='col-span-6'>
                  <label htmlFor='MarketingAccept' className='flex gap-4'>
                    <input
                      type='checkbox'
                      id='MarketingAccept'
                      name='marketing_accept'
                      className='size-7 rounded-md border-gray-200 bg-white shadow-sm'
                    />

                    <span className='text-sm text-gray-700'>
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className='col-span-6'>
                  <p className='text-sm text-gray-500'>
                    By creating an account, you agree to our
                    <a href='#' className='text-gray-700 underline'>
                      {' '}
                      terms and conditions{' '}
                    </a>
                    and
                    <a href='#' className='text-gray-700 underline'>
                      {' '}
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className='col-span-6 flex flex-col gap-4 md:flex-row sm:flex sm:items-center sm:gap-4'>
                  <button
                    type='submit'
                    className='inline-block shrink-0 rounded-md border border-[#2C6E49] bg-[#2C6E49] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#2C6E49] focus:outline-none focus:ring active:text-[#2C6E49]'>
                    Sign Up
                  </button>
                  <button
                    onClick={handleGoogleSignUp}
                    type='button'
                    className='inline-block shrink-0 rounded-md border border-[#2C6E49] bg-[#2C6E49] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#2C6E49] focus:outline-none focus:ring active:text-[#2C6E49]'>
                    Google
                  </button>

                  <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                    Already have an account?
                    <NavLink to='/Login' className='text-gray-700 underline'>
                      {' '}
                      Log in{' '}
                    </NavLink>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
