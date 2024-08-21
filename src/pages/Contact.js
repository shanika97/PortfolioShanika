// import React, { useState } from 'react';
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <main style={styles.container}>
//       <div style={styles.columns}>
//         <div style={styles.info}>
//           <h2 style={styles.contactHeading}>Contact Information</h2>
//           <div style={styles.infoItem}>
//             <FaMapMarkerAlt style={styles.icon} />
//             <p>330/2 Gonahena, Kadawatha</p>
//           </div>
//           <div style={styles.infoItem}>
//             <FaPhone style={styles.icon} />
//             <p>0756381168</p>
//           </div>
//           <div style={styles.infoItem}>
//             <FaEnvelope style={styles.icon} />
//             <p><a href="mailto:shanikagamageagm@gmail.com" style={styles.link}>shanikagamageagm@gmail.com</a></p>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <h1 style={styles.heading}>Contact Me...</h1>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="name">Your Name *</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="First and Last Name"
//               value={formData.name}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="email">Your Email *</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="example@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="phone">Your Phone *</label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="message">Message *</label>
//             <textarea
//               name="message"
//               placeholder="Write us a message"
//               value={formData.message}
//               onChange={handleChange}
//               style={styles.textarea}
//               required
//             />
//           </div>
//           <button type="submit" style={styles.button}>Send Message</button>
//         </form>
//       </div>
//     </main>
//   );
// };

// const styles = {
//   container: {
//     padding: '80px 20px',
//     backgroundColor: '#f4f7f6',
//     minHeight: '100vh',
//   },
//   columns: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: '40px',
//   },
//   info: {
//     flex: '1',
//     padding: '40px',
//     backgroundColor: '#2C3E50', // Dark background
//     color: '#fff',
//     borderRadius: '8px 0 0 8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     gap: '20px',
//   },
//   contactHeading: {
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   infoItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px',
//     fontSize: '18px',
//   },
//   icon: {
//     fontSize: '24px',
//     color: '#18BC9C', // Green color for icons
//   },
//   link: {
//     color: '#18BC9C', // Green color for links
//     textDecoration: 'none',
//   },
//   form: {
//     flex: '1',
//     maxWidth: '600px',
//     backgroundColor: '#ffffff',
//     padding: '40px',
//     borderRadius: '0 8px 8px 0',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//     color: '#333',
//     textAlign: 'left',
//   },
//   formGroup: {
//     marginBottom: '20px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '8px',
//     fontSize: '14px',
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: '15px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ddd',
//     outline: 'none',
//     transition: 'border-color 0.3s ease',
//   },
//   textarea: {
//     width: '100%',
//     padding: '15px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ddd',
//     outline: 'none',
//     height: '150px',
//     transition: 'border-color 0.3s ease',
//   },
//   button: {
//     width: '100%',
//     padding: '15px',
//     fontSize: '16px',
//     backgroundColor: '#18BC9C',
//     color: '#fff',
//     borderRadius: '4px',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
// };

// export default Contact;
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <main style={styles.container}>
      <div style={styles.columns}>
        <div style={styles.info}>
          <h2 style={styles.contactHeading}>Contact Information</h2>
          <div style={styles.infoItem}>
            <FaMapMarkerAlt style={styles.icon} />
            <p>330/2 Gonahena, Kadawatha</p>
          </div>
          <div style={styles.infoItem}>
            <FaPhone style={styles.icon} />
            <p>0756381168</p>
          </div>
          <div style={styles.infoItem}>
            <FaEnvelope style={styles.icon} />
            <p><a href="mailto:shanikagamageagm@gmail.com" style={styles.link}>shanikagamageagm@gmail.com</a></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <h1 style={styles.heading}>Contact Me...</h1>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Your Name *</label>
            <input
              type="text"
              name="name"
              placeholder="First and Last Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Your Email *</label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">Your Phone *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="message">Message *</label>
            <textarea
              name="message"
              placeholder="Write us a message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </main>
  );
};

const styles = {
  container: {
    padding: '80px 20px',
    backgroundColor: '#f4f7f6',
    minHeight: '100vh',
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap', // Ensure columns wrap on smaller screens
  },
  info: {
    flex: '1',
    padding: '40px',
    backgroundColor: '#2C3E50',
    color: '#fff',
    borderRadius: '8px 8px 0 0', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px', // Space below the info box
  },
  contactHeading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '18px',
  },
  icon: {
    fontSize: '24px',
    color: '#18BC9C',
  },
  link: {
    color: '#18BC9C',
    textDecoration: 'none',
  },
  form: {
    flex: '1',
    maxWidth: '600px',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '0 8px 8px 8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'left',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    outline: 'none',
    height: '150px',
    transition: 'border-color 0.3s ease',
  },
  button: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    backgroundColor: '#18BC9C',
    color: '#fff',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  '@media (max-width: 768px)': {
    columns: {
      flexDirection: 'column', // Stack columns vertically on small screens
    },
    info: {
      borderRadius: '8px 8px 0 0', // Adjust border radius for stacked columns
    },
    form: {
      borderRadius: '0 0 8px 8px', // Adjust border radius for stacked columns
    },
  },
};

export default Contact;
