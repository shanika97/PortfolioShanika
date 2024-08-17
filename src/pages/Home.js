import React from 'react';
import './Home.css';  // Import the CSS file
import profileImage from '../assets/profile.jpg';  // Ensure your image is in the correct folder


const Home = () => {
    return (
      <main style={styles.container}>
        <div style={styles.overlay}></div> {/* Adding an overlay for better contrast */}
        <div style={styles.content}>
          <div style={styles.textContainer} className="fadeIn">
            <h1 className="slideIn" style={styles.heading}>Hi, I'm Shanika Maduwanthi</h1>
            <p className="fadeInUp" style={styles.paragraph}>
              I'm an undergraduate at Vavuniya Campus of the University of Jaffna, specializing in Information Technology. With a strong foundation in full-stack development, I'm passionate about creating innovative and responsive web applications.
            </p>
          </div>
          <div className="scaleIn" style={styles.imageContainer}>
            <img src={profileImage} alt="Shanika Maduwanthi" style={styles.image} />
          </div>
        </div>
      </main>
    );
  };
  

// const Home = () => {
//   return (
//     <main style={styles.container}>
//       <div style={styles.overlay}></div> {/* Adding an overlay for better contrast */}
//       <div style={styles.content}>
//         <div style={styles.textContainer} className="fadeIn">
//           <h1 className="slideIn" style={styles.heading}>Hi, I'm Shanika Maduwanthi</h1>
//           <p className="fadeInUp" style={styles.paragraph}>
//             I'm a Full Stack Developer passionate about creating dynamic and responsive web applications.
//           </p>
//         </div>
//         <div className="scaleIn" style={styles.imageContainer}>
//           <img src={profileImage} alt="Shanika Maduwanthi" style={styles.image} />
//         </div>
//       </div>
//     </main>
//   );
// };

const styles = {
  container: {
    position: 'relative',
    padding: '100px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #485563 0%, #29323c 100%)',  // Elegant dark gradient
    color: '#ffffff',
    textAlign: 'center',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Slightly darker overlay for a dramatic effect
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    textAlign: 'center',
    '@media(min-width: 768px)': {
      flexDirection: 'row',
    },
  },
  textContainer: {
    maxWidth: '600px',
    marginRight: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0 0 20px',
    fontFamily: "'Montserrat', sans-serif",  // Stylish font
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    margin: 0,
    fontFamily: "'Open Sans', sans-serif",
  },
  imageContainer: {
    flexShrink: 0,
    marginBottom: '20px',
  },
  image: {
    borderRadius: '50%',
    width: '200px',  // Slightly larger image
    height: '200px',
    objectFit: 'cover',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',  // Stronger shadow
  },
};

export default Home;
