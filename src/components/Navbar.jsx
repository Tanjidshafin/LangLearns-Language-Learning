import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const Navbar = () => {
  const { setUser, user } = useContext(AppContext);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className='bg-white'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <div className='flex gap-1 items-center'>
          <img
            className='w-9 hidden md:flex rounded-full bg-transparent '
            src='https://w7.pngwing.com/pngs/280/358/png-transparent-ahhaa-logo-service-business-cold-icon-hand-service-room.png'
            alt=''
          />
          <p className='font-semibold text-xl'>LangLearns</p>
        </div>

        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <nav aria-label='Global' className='hidden md:block'>
            <ul className='flex items-center gap-6 text-sm'>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                      isActive
                        ? 'before:w-full text-[#3B9DF8]'
                        : ' text-gray-500'
                    }`
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/StartLearning'
                  className={({ isActive }) =>
                    `before:w-0 hover:before:w-full  before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                      isActive
                        ? 'before:w-full text-[#3B9DF8]'
                        : 'text-gray-500'
                    }`
                  }>
                  Start Learning
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/Tutorials'
                  className={({ isActive }) =>
                    `before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                      isActive
                        ? 'before:w-full text-[#3B9DF8]'
                        : ' text-gray-500'
                    }`
                  }>
                  Tutorials
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/MyProfile'
                  className={({ isActive }) =>
                    `before:w-0 hover:before:w-full  before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                      isActive ? 'before:w-full text-[#3B9DF8]' : 'text-gray-500'
                    } ${user ? '' : 'hidden'}`
                  }>
                  My Profile
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              {user ? (
                <>
                  <span className='text-gray-700 hidden md:flex'>
                    Welcome,{' '}
                    <span className='font-semibold'>
                      {user.displayName === null ? ' User' : user.displayName}
                    </span>
                  </span>
                  <NavLink to='/MyProfile'>
                    <img
                      className='rounded-full h-[2.5rem] object-cover w-[2.5rem]'
                      src={
                        user.photoURL === null
                          ? 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-600nw-1725655669.jpg'
                          : user.photoURL
                      }
                      alt=''
                    />
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className='btn hidden md:flex text-white font-semibold w-20 bg-red-600'>
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to='/Login'
                  className='btn text-white font-semibold w-20 bg-[#2C6E49]'>
                  Login
                </NavLink>
              )}
            </div>

            <div className='dropdown md:hidden block dropdown-end'>
              <div tabIndex={0} role='button' className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-7 '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
                <li>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      `before:w-0 hover:before:w-full  before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                        isActive
                          ? 'bg-[#389DF8] text-white font-semibold'
                          : 'text-gray-500'
                      }`
                    }>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/StartLearning'
                    className={({ isActive }) =>
                      `before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                        isActive
                          ? 'bg-[#389DF8] text-white font-semibold'
                          : 'text-gray-500'
                      }`
                    }>
                    Start Learning
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/Tutorials'
                    className={({ isActive }) =>
                      `before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                        isActive
                          ? 'bg-[#389DF8] text-white font-semibold'
                          : 'text-gray-500'
                      }`
                    }>
                    Tutorials
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/MyProfile'
                    className={({ isActive }) =>
                      `before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                        isActive
                          ? 'bg-[#389DF8] text-white font-semibold'
                          : 'text-gray-500'
                      } ${user ? '' : 'hidden'}`
                    }>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/Login'
                    onClick={handleLogout}
                    className={({ isActive }) =>
                      `before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize ${
                        isActive
                          ? 'bg-[#389DF8] text-white font-semibold'
                          : 'text-gray-500'
                      } ${user ? '' : 'hidden'}`
                    }>
                    Log out
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='divider mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'></div>
    </header>
  );
};
export default Navbar;
