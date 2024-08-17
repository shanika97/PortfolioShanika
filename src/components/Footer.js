// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <p style={styles.text}>© 2024 Shanika Maduwanthi. All rights reserved.</p>
//       <div style={styles.socials}>
//         <a href="https://linkedin.com/in/shanika-aththatage-312a0b255" target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
//         <a href="https://github.com/shanika97" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
//       </div>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     backgroundColor: '#2c3e50',
//     color: '#ecf0f1',
//     padding: '20px 0',
//     textAlign: 'center',
//     width: '100%',
//     boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
//     marginTop: 'auto',
//   },
//   text: {
//     margin: 0,
//     fontSize: '16px',
//   },
//   socials: {
//     marginTop: '10px',
//   },
//   link: {
//     margin: '0 15px',
//     color: '#3498db',
//     textDecoration: 'none',
//     fontSize: '18px',
//   },
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 Shanika Maduwanthi. All rights reserved.</p>
      <div style={styles.socials}>
        <a href="https://linkedin.com/in/shanika-aththatage-312a0b255" target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
        <a href="https://github.com/shanika97" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#29323c',  // Matching the dark mode of the Header and Home page
    color: '#ecf0f1',  // Light text color for contrast
    padding: '20px 0',
    textAlign: 'center',
    width: '100%',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
    marginTop: 'auto',
  },
  text: {
    margin: 0,
    fontSize: '16px',
  },
  socials: {
    marginTop: '10px',
  },
  link: {
    margin: '0 15px',
    color: '#3498db',  // Consistent link color across the site
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Footer;
