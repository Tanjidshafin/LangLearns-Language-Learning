import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const Navbar = () => {
  const { setUser, user } = useContext(AppContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'}`}>
      <div className='mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Logo Section */}
        <div className='flex items-center gap-2 group'>
          <div className='relative overflow-hidden rounded-full p-1'>
            <img
              className='w-10 h-10 rounded-full transform transition-transform group-hover:scale-110'
              src='https://w7.pngwing.com/pngs/280/358/png-transparent-ahhaa-logo-service-business-cold-icon-hand-service-room.png'
              alt='LangLearns Logo'
            />
          </div>
          <div className='flex flex-col'>
            <p className='font-bold text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>
              LangLearns
            </p>
            <span className='text-xs text-gray-500 -mt-1'>Master Languages Easily</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label='Global' className='hidden md:block'>
          <ul className='flex items-center gap-8 text-sm font-medium'>
            <NavItem to="/" label="Home" />
            <NavItem to="/StartLearning" label="Start Learning" />
            <NavItem to="/Tutorials" label="Tutorials" />
            {user && <NavItem to="/MyProfile" label="My Profile" />}
          </ul>
        </nav>

        {/* User Section */}
        <div className='flex items-center gap-4'>
          {user ? (
            <div className='flex items-center gap-3'>
              <div className='hidden md:flex flex-col items-end'>
                <span className='text-sm text-gray-600'>Welcome,</span>
                <span className='font-semibold text-gray-800'>
                  {user.displayName || 'User'}
                </span>
              </div>

              <NavLink to='/MyProfile' className='relative group'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse blur-md opacity-70 group-hover:opacity-100 transition-opacity'></div>
                <img
                  className='relative rounded-full h-11 w-11 object-cover border-2 border-white shadow-md transform transition-all duration-300 group-hover:scale-105'
                  src={user.photoURL || 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-600nw-1725655669.jpg'}
                  alt='User avatar'
                />
              </NavLink>

              <button
                onClick={handleLogout}
                className='hidden md:flex items-center justify-center h-10 px-5 font-medium text-white transition-all duration-300 bg-gradient-to-r from-red-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-0.5'>
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to='/Login'
              className='flex items-center justify-center h-10 px-6 font-medium text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-0.5'>
              Login
            </NavLink>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className='py-4 px-6'>
          <ul className='flex flex-col gap-3'>
            <MobileNavItem to="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem to="/StartLearning" label="Start Learning" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem to="/Tutorials" label="Tutorials" onClick={() => setMobileMenuOpen(false)} />
            {user && <MobileNavItem to="/MyProfile" label="My Profile" onClick={() => setMobileMenuOpen(false)} />}
            {user && (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className='w-full flex items-center justify-center py-3 mt-2 font-medium text-white transition-all duration-300 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg'>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Divider with gradient */}
      <div className='h-0.5 w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent'></div>
    </header>
  );
};

// Desktop Navigation Item Component
const NavItem = ({ to, label }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-3 py-2 font-medium transition-all duration-300 rounded-full ${isActive
          ? 'text-blue-600'
          : 'text-gray-600 hover:text-blue-600'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'
            }`}></span>
        </>
      )}
    </NavLink>
  </li>
);

// Mobile Navigation Item Component
const MobileNavItem = ({ to, label, onClick }) => (
  <li>
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block w-full py-3 px-4 rounded-lg transition-all duration-300 ${isActive
          ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-blue-600 font-medium'
          : 'text-gray-700 hover:bg-gray-100'
        }`
      }
    >
      {label}
    </NavLink>
  </li>
);

export default Navbar;