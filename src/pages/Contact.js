// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
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
//     // Handle form submission
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <main style={styles.container}>
//       <h1>Contact Me</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           style={styles.textarea}
//           required
//         />
//         <button type="submit" style={styles.button}>Send</button>
//       </form>
//     </main>
//   );
// };

// const styles = {
//   container: {
//     padding: '100px 20px',
//     textAlign: 'center',
//   },
//   form: {
//     maxWidth: '600px',
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   },
//   input: {
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//   },
//   textarea: {
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     height: '150px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#333',
//     color: '#fff',
//     borderRadius: '4px',
//     border: 'none',
//     cursor: 'pointer',
//   },
// };

// export default Contact;


import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </main>
  );
};

const styles = {
  container: {
    padding: '80px 20px',
    textAlign: 'center',
    backgroundColor: '#f4f7f6',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333',
    fontFamily: "'Montserrat', sans-serif",
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontFamily: "'Open Sans', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontFamily: "'Open Sans', sans-serif",
    height: '150px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '15px 30px',
    fontSize: '16px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Montserrat', sans-serif",
    transition: 'background-color 0.3s ease',
  },
};

export default Contact;
