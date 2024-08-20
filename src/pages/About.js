// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGraduationCap, FaBriefcase, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
// import profileImage from '../assets/profile.jpg';  // Ensure your image is in the correct folder

// const About = () => {
//   return (
//     <main style={styles.container}>
//       <motion.section
//         style={styles.profileSection}
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <div style={styles.profileContent}>
//           <motion.div
//             style={styles.textContent}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}
//           >
//             <h1 style={styles.heading}>About Me</h1>
//             <p style={styles.profileText}>
//               I am a dynamic and enthusiastic IT professional with a robust foundation in full-stack development and a proven track record in problem-solving and project management. With hands-on experience and a comprehensive educational background in IT, I excel in team settings and adapt swiftly to changing environments. I am committed to continuous improvement and eager to contribute to and grow within a forward-thinking organization.
//             </p>
//           </motion.div>
//           <motion.div
//             style={styles.imageContainer}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.5 }}
//           >
//             <img src={profileImage} alt="Shanika Maduwanthi" style={styles.image} />
//           </motion.div>
//         </div>
//       </motion.section>

//       <motion.section
//         style={styles.section}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 style={styles.subheading}><FaGraduationCap style={styles.icon} /> Education</h2>
//         <div style={styles.card}>
//           <h3>BSc Degree in Information Technology</h3>
//           <p><em>2020 – 2023 | Vavuniya Campus of the University of Jaffna</em></p>
//         </div>
//         <div style={styles.card}>
//           <h3>Diploma in Human Resource Management</h3>
//           <p><em>2022 – 2023 | IMBS Green Campus, Gampaha, Sri Lanka</em></p>
//         </div>
//         <div style={styles.card}>
//           <h3>Diploma in Psychology & Counseling</h3>
//           <p><em>2022 – 2023 | SITC Campus, Kandy, Sri Lanka</em></p>
//         </div>
//         <div style={styles.card}>
//           <h3>English Elementary 2 Certificate Course</h3>
//           <p><em>British Council, Colombo, Sri Lanka</em></p>
//         </div>
//       </motion.section>

//       <motion.section
//         style={styles.section}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         <h2 style={styles.subheading}><FaBriefcase style={styles.icon} /> Professional Summary</h2>
//         <div style={styles.card}>
//           <p style={styles.profileText}>
//             As a Intern Software Engineer, I have gained experience in developing robust and scalable web applications. My expertise includes Java, Angular, Spring Boot,Spring MVC, JSP and MySQL. I thrive in collaborative environments and am dedicated to enhancing my skills in software development.
//           </p>
//         </div>
//       </motion.section>

//       <motion.section
//         style={styles.section}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         <h2 style={styles.subheading}>Personal Information</h2>
//         <div style={styles.infoForm}>
//           <div style={styles.infoItem}>
//             <FaEnvelope style={styles.formIcon} />
//             <p>Email: <a href="mailto:shanikagamageagm@gmail.com" style={styles.link}>shanikagamageagm@gmail.com</a></p>
//           </div>
//           <div style={styles.infoItem}>
//             <FaPhone style={styles.formIcon} />
//             <p>Phone: 0756381168</p>
//           </div>
//           <div style={styles.infoItem}>
//             <FaLinkedin style={styles.formIcon} />
//             <p>LinkedIn: <a href="https://linkedin.com/in/shanika-aththatage-312a0b255" target="_blank" rel="noopener noreferrer" style={styles.link}>linkedin.com/in/shanika-aththatage-312a0b255</a></p>
//           </div>
//           <div style={styles.infoItem}>
//             <FaGithub style={styles.formIcon} />
//             <p>GitHub: <a href="https://github.com/shanika97" target="_blank" rel="noopener noreferrer" style={styles.link}>github.com/shanika97</a></p>
//           </div>
//         </div>
//       </motion.section>
//     </main>
//   );
// };

// const styles = {
//   container: {
//     padding: '50px 20px',
//     maxWidth: '900px',
//     margin: '0 auto',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: '#333',
//     lineHeight: '1.6',
//   },
//   profileSection: {
//     marginBottom: '40px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '30px',
//     backgroundColor: '#f7f7f7',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   profileContent: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   textContent: {
//     maxWidth: '60%',
//   },
//   imageContainer: {
//     flexShrink: 0,
//   },
//   image: {
//     borderRadius: '50%',
//     width: '150px',
//     height: '150px',
//     objectFit: 'cover',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     fontSize: '36px',
//     marginBottom: '20px',
//     color: '#444',
//   },
//   profileText: {
//     fontSize: '18px',
//     textAlign: 'justify',
//   },
//   section: {
//     marginBottom: '40px',
//   },
//   subheading: {
//     fontSize: '28px',
//     marginBottom: '15px',
//     color: '#555',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: '10px',
//     color: '#0073e6',
//   },
//   card: {
//     backgroundColor: '#f7f7f7',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     marginBottom: '20px',
//   },
//   infoForm: {
//     backgroundColor: '#f7f7f7',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     marginTop: '20px',
//   },
//   infoItem: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '15px',
//   },
//   formIcon: {
//     marginRight: '10px',
//     color: '#0073e6',
//     fontSize: '20px',
//   },
//   link: {
//     color: '#0073e6',
//     textDecoration: 'none',
//   },
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';  // Ensure your image is in the correct folder

const About = () => {
  return (
    <main style={styles.container}>
      <motion.section
        style={styles.profileSection}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.profileContent}>
          <motion.div
            style={styles.textContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h1 style={styles.heading}>About Me</h1>
            <p style={styles.profileText}>
              I am a dynamic and enthusiastic IT professional with a robust foundation in full-stack development and a proven track record in problem-solving and project management. With hands-on experience and a comprehensive educational background in IT, I excel in team settings and adapt swiftly to changing environments. I am committed to continuous improvement and eager to contribute to and grow within a forward-thinking organization.
            </p>
            <a href="https://drive.google.com/file/d/1D0G2riGEhS7DfH6_Dcp8zXarbLRBBzYW/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={styles.downloadButton}>
             
              <FaDownload style={styles.downloadIcon} /> Download My CV
            </a>
          </motion.div>
          <motion.div
            style={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src={profileImage} alt="Shanika Maduwanthi" style={styles.image} />
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.subheading}><FaGraduationCap style={styles.icon} /> Education</h2>
        <div style={styles.card}>
          <h3>BSc Degree in Information Technology</h3>
          <p><em>2020 – 2023 | Vavuniya Campus of the University of Jaffna</em></p>
        </div>
        <div style={styles.card}>
          <h3>Diploma in Human Resource Management</h3>
          <p><em>2022 – 2023 | IMBS Green Campus, Gampaha, Sri Lanka</em></p>
        </div>
        <div style={styles.card}>
          <h3>Diploma in Psychology & Counseling</h3>
          <p><em>2022 – 2023 | SITC Campus, Kandy, Sri Lanka</em></p>
        </div>
        <div style={styles.card}>
          <h3>English Elementary 2 Certificate Course</h3>
          <p><em>British Council, Colombo, Sri Lanka</em></p>
        </div>
      </motion.section>

      {/* Professional Summary Section */}
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2 style={styles.subheading}><FaBriefcase style={styles.icon} /> Professional Summary</h2>
        <div style={styles.card}>
          <p style={styles.profileText}>
            As an Intern Software Engineer, I have gained experience in developing robust and scalable web applications. My expertise includes Java, Angular, Spring Boot, Spring MVC, JSP, and MySQL. I thrive in collaborative environments and am dedicated to enhancing my skills in software development.
          </p>
        </div>
      </motion.section>

      {/* Personal Information Section */}
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2 style={styles.subheading}>Personal Information</h2>
        <div style={styles.infoForm}>
          <div style={styles.infoItem}>
            <FaEnvelope style={styles.formIcon} />
            <p>Email: <a href="mailto:shanikagamageagm@gmail.com" style={styles.link}>shanikagamageagm@gmail.com</a></p>
          </div>
          <div style={styles.infoItem}>
            <FaPhone style={styles.formIcon} />
            <p>Phone: 0756381168</p>
          </div>
          <div style={styles.infoItem}>
            <FaLinkedin style={styles.formIcon} />
            <p>LinkedIn: <a href="https://linkedin.com/in/shanika-aththatage-312a0b255" target="_blank" rel="noopener noreferrer" style={styles.link}>linkedin.com/in/shanika-aththatage-312a0b255</a></p>
          </div>
          <div style={styles.infoItem}>
            <FaGithub style={styles.formIcon} />
            <p>GitHub: <a href="https://github.com/shanika97" target="_blank" rel="noopener noreferrer" style={styles.link}>github.com/shanika97</a></p>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    lineHeight: '1.6',
  },
  profileSection: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  profileContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContent: {
    maxWidth: '60%',
  },
  imageContainer: {
    flexShrink: 0,
  },
  image: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#444',
  },
  profileText: {
    fontSize: '18px',
    textAlign: 'justify',
  },
  downloadButton: {
    marginTop: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#0073e6',
    borderRadius: '5px',
    textDecoration: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
  downloadIcon: {
    marginRight: '10px',
  },
  section: {
    marginBottom: '40px',
  },
  subheading: {
    fontSize: '28px',
    marginBottom: '15px',
    color: '#555',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
    color: '#0073e6',
  },
  card: {
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  infoForm: {
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  formIcon: {
    marginRight: '10px',
    color: '#0073e6',
    fontSize: '20px',
  },
  link: {
    color: '#0073e6',
    textDecoration: 'none',
  },
};

export default About;
