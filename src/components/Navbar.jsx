import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import logo from '../assets/Tree.png';

import { AuthContext } from '../providers/AuthProvider';
import { ThemeContext } from '../providers/ThemeContext';

const NAVBAR_HEIGHT = 64;

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === 'dark';

  // Custom olive-green colors
  const colors = {
    oliveGreen1: '#7d9733',
    oliveGreen2: '#a8b32f',
    oliveGreen3: '#93a844',
    darkOliveText: '#3a4b12',
    creamWhite: '#fefcf5',
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log('User signed out successfully'))
      .catch((error) => console.log(error));
  };

  const LeafIcon = () => (
    <span
      aria-hidden="true"
      className="absolute -top-3 right-2 opacity-0 group-hover:opacity-70 transition-opacity duration-300 transform group-hover:rotate-6 group-hover:scale-105"
      style={{
        filter: isDark ? 'drop-shadow(0 0 3px #2dd4bf)' : 'drop-shadow(0 0 4px #10b981)',
        color: isDark ? colors.oliveGreen2 : colors.oliveGreen1,
      }}
    >
      🌿
    </span>
  );

  const NavItem = ({ to, text }) => (
    <li key={text} className="relative group">
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          `relative px-5 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
            isActive ? 'shadow-[0_0_8px_2px_rgba(168,179,47,0.4)]' : ''
          }`
        }
        style={({ isActive }) => ({
          color: isActive
            ? isDark
              ? colors.oliveGreen3
              : colors.oliveGreen1
            : isDark
            ? colors.oliveGreen2
            : colors.darkOliveText,
          backgroundColor: isActive
            ? isDark
              ? 'rgba(53, 62, 10, 0.6)'
              : 'rgba(125, 151, 51, 0.15)'
            : 'transparent',
        })}
      >
        {text}
        <LeafIcon />
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 w-0 h-[3px] rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-2/3"
          style={{
            backgroundColor: colors.oliveGreen2,
            boxShadow: isDark ? '0 0 5px #a8b32f' : '0 0 5px #7d9733',
          }}
        />
      </NavLink>
    </li>
  );

  const ThemeToggleSlider = () => (
    <label
      htmlFor="theme-toggle"
      className="relative inline-block w-14 h-8 cursor-pointer"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only"
        checked={isDark}
        onChange={toggleTheme}
      />
      <span
        className={`block rounded-full h-8 transition-colors duration-300 ${
          isDark ? colors.oliveGreen2 : colors.oliveGreen1
        }`}
      ></span>
      <span
        className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      ></span>
    </label>
  );

  // Mobile Menu Items + user image + theme toggle inside dropdown
  const MobileMenuContent = () => (
    <>
      <ul className="flex flex-col gap-2 px-4 pb-4">
        {[{ to: '/', text: 'Home' },
          { to: '/allPlants', text: 'All Plants' },
          ...(user ? [{ to: '/addPlants', text: 'Add Plants' }, { to: '/myPlants', text: 'My Plants' }] : []),
          ...(!user ? [{ to: '/register', text: 'Registration' }] : []),
        ].map(({ to, text }) => (
          <li key={text}>
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isActive
                    ? isDark
                      ? `bg-[${colors.oliveGreen3}] text-${colors.creamWhite}`
                      : `bg-[${colors.oliveGreen1}] text-white`
                    : isDark
                    ? `text-[${colors.oliveGreen2}] hover:bg-black/40 hover:text-${colors.oliveGreen3}`
                    : `text-${colors.darkOliveText} hover:bg-[${colors.oliveGreen1}] hover:text-white`
                }`
              }
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>

      <div
        className="border-t px-4 pt-4 flex flex-col items-center gap-4"
        style={{
          borderColor: isDark ? `${colors.oliveGreen3}80` : `${colors.oliveGreen2}50`,
          backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.85)',
          color: isDark ? colors.oliveGreen3 : colors.darkOliveText,
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '0 0 0.5rem 0.5rem',
        }}
      >
        {user ? (
          <>
            <img
              src={user.photoURL}
              alt="User profile"
              className="w-20 h-20 rounded-full ring-2 ring-[rgba(125,151,51,0.7)] shadow-md"
              title={user.displayName || 'User'}
            />
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-6 py-2 rounded-full"
              style={{
                background: isDark
                  ? `linear-gradient(90deg, ${colors.oliveGreen2}, ${colors.oliveGreen3})`
                  : `linear-gradient(90deg, ${colors.oliveGreen3}, ${colors.oliveGreen1})`,
                color: colors.creamWhite,
                
                fontWeight: '600',
              }}
              aria-label="Sign out"
            >
              <FiLogOut className="text-xl" />
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-2 px-6 py-2 rounded-full"
            style={{
              background: isDark
                ? `linear-gradient(90deg, ${colors.oliveGreen2}, ${colors.oliveGreen3})`
                : `linear-gradient(90deg, ${colors.oliveGreen3}, ${colors.oliveGreen1})`,
              color: colors.creamWhite,
              boxShadow: `0 4px 10px 0 ${colors.oliveGreen3}bb`,
              fontWeight: '600',
            }}
            aria-label="Login"
          >
            <FiLogIn className="text-xl" />
            Login
          </Link>
        )}
        <div className="mt-4">
          <ThemeToggleSlider />
        </div>
      </div>
    </>
  );

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b shadow-md"
        style={{
          WebkitBackdropFilter: 'blur(10px)',
          backdropFilter: 'blur(10px)',
          height: NAVBAR_HEIGHT,
          backgroundColor: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
          borderColor: isDark ? 'rgba(125,151,51,0.4)' : 'rgba(125,151,51,0.2)',
          color: isDark ? colors.oliveGreen3 : colors.oliveGreen1,
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">
          {/* Logo + Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 select-none cursor-pointer"
            aria-label="Go to homepage"
          >
            <img src={logo} alt="Logo" className="w-14 h-14 drop-shadow-md" />
            <span
              className="text-3xl font-extrabold tracking-wider"
              style={{
                background: isDark
                  ? 'linear-gradient(90deg, #93a844, #2dd4bf, #93a844)'
                  : 'none',
                WebkitBackgroundClip: isDark ? 'text' : 'unset',
                WebkitTextFillColor: isDark ? 'transparent' : colors.oliveGreen1,
              }}
            >
              PLUNT
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6">
            {[{ to: '/', text: 'Home' },
            { to: '/allPlants', text: 'All Plants' },
            ...(user ? [{ to: '/addPlants', text: 'Add Plants' }, { to: '/myPlants', text: 'My Plants' }] : []),
            ...(!user ? [{ to: '/register', text: 'Registration' }] : []),
            ].map(({ to, text }) => (
              <NavItem key={text} to={to} text={text} />
            ))}
          </ul>

          {/* Hamburger for small screens */}
          <details className="lg:hidden relative">
            <summary
              className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer select-none transition-colors duration-300"
              aria-label="Toggle menu"
              style={{
                backgroundColor: isDark ? colors.oliveGreen3 : colors.oliveGreen1,
                color: isDark ? colors.creamWhite : colors.creamWhite,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? colors.oliveGreen1 : colors.oliveGreen3;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? colors.oliveGreen3 : colors.oliveGreen1;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div
              className="absolute right-4 top-14 w-56 backdrop-blur-md rounded-lg shadow-lg py-2 z-50 border"
              style={{
                backgroundColor: isDark ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)',
                borderColor: isDark ? `${colors.oliveGreen3}80` : `${colors.oliveGreen2}50`,
                color: isDark ? colors.oliveGreen3 : colors.darkOliveText,
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '0 0 0.5rem 0.5rem',
              }}
            >
              <MobileMenuContent />
            </div>
          </details>

          {/* Right Side (desktop only) */}
          <div className="hidden lg:flex items-center gap-5">
            <ThemeToggleSlider />

            {user ? (
              <>
                <div className="relative group">
                  <img
                    src={user.photoURL}
                    alt="User profile"
                    className="w-12 h-12 rounded-full cursor-pointer ring-1 ring-[rgba(125,151,51,0.7)] transition-shadow duration-200 group-hover:shadow-[0_0_8px_3px_rgba(125,151,51,0.7)]"
                    title={user.displayName || 'User'}
                  />
                </div>

                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow-md transition duration-300"
                  style={{
                    background: isDark
                      ? `linear-gradient(90deg, ${colors.oliveGreen2}, ${colors.oliveGreen3})`
                      : `linear-gradient(90deg, ${colors.oliveGreen3}, ${colors.oliveGreen1})`,
                    color: colors.creamWhite,
                    boxShadow: `0 4px 10px 0 ${colors.oliveGreen3}bb`,
                  }}
                  aria-label="Sign out"
                >
                  <FiLogOut className="text-xl" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow-md transition duration-300"
                style={{
                  background: isDark
                    ? `linear-gradient(90deg, ${colors.oliveGreen2}, ${colors.oliveGreen3})`
                    : `linear-gradient(90deg, ${colors.oliveGreen3}, ${colors.oliveGreen1})`,
                  color: colors.creamWhite,
                  boxShadow: `0 4px 10px 0 ${colors.oliveGreen3}bb`,
                }}
                aria-label="Login"
              >
                <FiLogIn className="text-xl" />
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
};

export default Navbar;
