// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark');
//   };

//   return (
//     <header style={isDarkMode ? styles.headerDark : styles.headerLight}>
//       <nav style={styles.nav}>
//         <Link style={styles.link} to="/">Home</Link>
//         <Link style={styles.link} to="/about">About</Link>
//         <Link style={styles.link} to="/projects">Projects</Link>
//         <Link style={styles.link} to="/contact">Contact</Link>
//         <button onClick={toggleDarkMode} style={styles.toggleButton}>
//           {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
//         </button>
//       </nav>
//     </header>
//   );
// };

// const styles = {
//   headerLight: {
//     backgroundColor: '#f9f9f9',
//     padding: '15px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   headerDark: {
//     backgroundColor: '#2c3e50',
//     padding: '15px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//   },
//   nav: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//   },
//   link: {
//     color: '#3498db',
//     textDecoration: 'none',
//     fontSize: '18px',
//     fontWeight: 'bold',
//   },
//   toggleButton: {
//     backgroundColor: 'transparent',
//     border: 'none',
//     color: '#3498db',
//     fontSize: '16px',
//     cursor: 'pointer',
//     outline: 'none',
//   },
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header style={isDarkMode ? styles.headerDark : styles.headerLight}>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/projects">Projects</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
        <button onClick={toggleDarkMode} style={styles.toggleButton}>
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>
    </header>
  );
};

const styles = {
  headerLight: {
    backgroundColor: '#ffffff',  // Light background for light mode
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  headerDark: {
    backgroundColor: '#29323c',  // Darker background for dark mode, matching Home page
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    color: '#3498db',  // Consistent link color
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  toggleButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#3498db',  // Toggle button color matching links
    fontSize: '16px',
    cursor: 'pointer',
    outline: 'none',
  },
};

export default Header;
