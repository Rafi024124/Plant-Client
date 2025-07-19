import React, { useContext } from 'react';
import logo from '../assets/Tree.png';
import buttonImg from '../assets/button.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';
import { ThemeContext } from '../providers/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // Custom olive green colors
  const colors = {
    oliveGreen1: '#7d9733',
    oliveGreen2: '#a8b32f',
    oliveGreen3: '#93a844',
    darkOliveText: '#3a4b12',
    creamWhite: '#fefcf5',
    backgroundLight: '#f6f5e9',
    backgroundDark: '#2c3a12',
    borderLight: '#bcc47f',
    borderDark: '#536627',
    shadowLight: '#c2d16e88',
    shadowDark: '#8a9d2eaa',
    iconLight: '#fefcf5',
    iconDark: '#a8b32f',
  };

  const socialButton = (href, icon, label) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block w-14 h-14 group"
      aria-label={label}
    >
      <img
        src={buttonImg}
        alt={label}
        className="w-full h-full object-cover rotate-90 transform transition-transform duration-300 group-hover:rotate-[135deg]"
        style={{
          filter: isDark
            ? 'brightness(0.8) saturate(1.2) sepia(0.3) hue-rotate(75deg)'
            : 'none',
        }}
      />
      <span
        className="absolute inset-0 flex items-center justify-center text-lg drop-shadow-md pointer-events-none"
        style={{ color: isDark ? colors.iconDark : colors.iconLight }}
      >
        {icon}
      </span>
    </a>
  );

  return (
    <footer
      style={{
        background: isDark
          ? `linear-gradient(135deg, ${colors.backgroundDark}, #334212, ${colors.backgroundDark})`
          : `linear-gradient(135deg, ${colors.backgroundLight}, #e6e9b3, ${colors.backgroundLight})`,
        color: isDark ? colors.oliveGreen3 : colors.darkOliveText,
        borderTop: `1px solid ${isDark ? colors.borderDark : colors.borderLight}`,
        boxShadow: isDark
          ? `inset 0 2px 4px 0 ${colors.shadowDark}`
          : `inset 0 2px 4px 0 ${colors.shadowLight}`,
      }}
      className="py-12 px-6 mt-16 max-w-full"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Logo + Name */}
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Logo" className="w-16" />
          <span
            className="text-3xl font-bold drop-shadow"
            style={{ color: isDark ? colors.oliveGreen3 : colors.oliveGreen1 }}
          >
            PLUNT
          </span>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="text-lg font-semibold mb-3"
            style={{ color: isDark ? colors.oliveGreen2 : colors.oliveGreen1 }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: '/', label: 'Home' },
              { to: '/allPlants', label: 'All Plants' },
              { to: '/addPlants', label: 'Add Plants' },
              { to: '/myplants', label: 'My Plants' },
              { to: '/register', label: 'Register' },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="hover:text-opacity-80 transition-colors"
                  style={{
                    color: isDark ? colors.oliveGreen3 : colors.darkOliveText,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = isDark ? colors.oliveGreen1 : colors.oliveGreen2)}
                  onMouseLeave={e => (e.currentTarget.style.color = isDark ? colors.oliveGreen3 : colors.darkOliveText)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            className="text-lg font-semibold mb-3"
            style={{ color: isDark ? colors.oliveGreen2 : colors.oliveGreen1 }}
          >
            Contact
          </h3>
          <p className="text-sm" style={{ color: isDark ? colors.oliveGreen3 : colors.darkOliveText }}>
            Email: support@plunt.com
          </p>
          <p className="text-sm" style={{ color: isDark ? colors.oliveGreen3 : colors.darkOliveText }}>
            Phone: +1 (123) 456-7890
          </p>
          <p className="text-sm" style={{ color: isDark ? colors.oliveGreen3 : colors.darkOliveText }}>
            Location: Green City, Natureland
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3
            className="text-lg font-semibold mb-3"
            style={{ color: isDark ? colors.oliveGreen2 : colors.oliveGreen1 }}
          >
            Follow Us
          </h3>
          <div className="flex gap-4">
            {socialButton(
              'https://github.com/your-profile',
              <FaGithub />,
              'GitHub'
            )}
            {socialButton(
              'https://linkedin.com/in/your-profile',
              <FaLinkedin />,
              'LinkedIn'
            )}
            {socialButton(
              'https://twitter.com/your-profile',
              <FaTwitter />,
              'Twitter'
            )}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="text-center mt-12 text-sm"
        style={{ color: isDark ? colors.oliveGreen2 : colors.oliveGreen1 }}
      >
        &copy; {new Date().getFullYear()}{' '}
        <span className="font-semibold">PLUNT</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
