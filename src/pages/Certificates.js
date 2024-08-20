import React from 'react';
import { FaCertificate, FaDownload } from 'react-icons/fa';

const certificates = [
  {
    title: 'Angular',
    institution: 'Great Learning',
    date: 'Oct 2023',
    link: 'https://drive.google.com/file/d/1TaJH9jY_7fcy5bodvUU1_Nmmh30mw_LH/view?usp=drive_link',
  },
  {
    title: 'Java Programming',
    institution: 'Great Learning',
    date: 'November 2023',
    link: 'https://drive.google.com/file/d/1VYrAF8ZjM43fMiRPHA2WnIRFPNf5ziqD/view?usp=drive_link',
  },
  {
    title: 'PHP Tutorial Beginner to Advanced',
    institution: 'Udemy',
    date: 'Dec 2023',
    link: 'https://drive.google.com/file/d/1uLYypcFWJcrVAeIFIbu92QN7aLHUeUDZ/view?usp=drive_link', 
  },
  {
    title: 'SQL',
    institution: 'Udemy',
    date: 'Dec 2023',
    link: 'https://drive.google.com/file/d/1Sj9MOc3bd9ypoN0RwKVOqFZlvvsQD7bc/view?usp=drive_link', 
  },
  {
    title: 'Figma',
    institution: 'Udemy',
    link: 'https://drive.google.com/file/d/1N5rIyUafi79Vqp9mwLsG6BpWGV6y3aBl/view?usp=drive_link',
  },
  {
    title: 'Introduction to Java Spring Framework',
    institution: 'SimpleLearn',
    date: 'Feb 2024',
    link: 'https://drive.google.com/file/d/1w22i6I2MFIFXSc3QMRWqV5Ga5OitU1PL/view?usp=drive_link',
  },
  {
    title: 'Programming Basic',
    institution: 'Great Learning',
    date: 'Oct 2023',
    link: 'https://drive.google.com/file/d/1FifNDPNX-hdmh7-qXok-H8RUzvFB94da/view?usp=drive_link', // Add the correct link here
  },
  {
    title: 'Road to INSL (Coding Competition)',
    institution: 'IEEE Innovation Nation Sri Lanka',
    link: 'https://drive.google.com/file/d/1xq9kfTGxy7fGD6xXbltmYuluuq3x3YO3/view?usp=drive_link', // Add the correct link here
  },
  {
    title: 'HTML',
    institution: 'SoloLearn',
    date: 'Feb 2023',
    link: 'https://drive.google.com/file/d/1OHEhzc7EtyTYFiJDjLlN_grWqsVF2ZUV/view?usp=drive_link',
  },
  {
    title: 'Java',
    institution: 'PROVIOUS Institute',
    date: 'August 2021',
    link: 'https://drive.google.com/file/d/1veyMNBRDnHNOoWYK7CaYgfub3gVTkSm0/view?usp=drive_link', // Add the correct link here
  },
  {
    title: 'Python',
    institution: 'Moratuwa University',
    date: 'July 2022',
    link: 'https://drive.google.com/file/d/1hvhPRqknyIhryWzrolDWU0Ez0JMyX41X/view?usp=drive_link', // Add the correct link here
  },
];

const Certificates = () => {
  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>My Certificates</h1>
      <div style={styles.cardContainer}>
        {certificates.map((certificate, index) => (
          <div key={index} style={styles.card}>
            <FaCertificate style={styles.icon} />
            <h3 style={styles.title}>{certificate.title}</h3>
            <p style={styles.institution}>{certificate.institution}</p>
            <p style={styles.date}>{certificate.date}</p>
            {certificate.link && (
              <a href={certificate.link} target="_blank" rel="noopener noreferrer" style={styles.downloadButton}>
                <FaDownload style={styles.downloadIcon} /> View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
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
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
    color: '#444',
    textAlign: 'center',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  icon: {
    fontSize: '40px',
    color: '#0073e6',
    marginBottom: '10px',
  },
  title: {
    fontSize: '20px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  institution: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  date: {
    fontSize: '14px',
    color: '#777',
  },
  downloadButton: {
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
};

export default Certificates;
