


import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'DLB Sweep Web Application (Admin Portal)',
    description: 'Worked together with the web developing (operational) team to create a project for Development Lotteries Board.',
    technologies: 'JSP/Servlet, Struts2, Angular/Spring Boot',
    image: '/PortfolioShanika/images/dlb-sweep.png', // Replace with actual image paths
   
  },
  {
    title: 'Photography Website',
    description: 'Developed a website for photography, including wedding packages and different function packages.',
    technologies: 'PHP, HTML, CSS, JS',
    image: '/PortfolioShanika/images/photography-website.png',
  },
  {
    title: 'Employee Management System',
    description: 'Front end developed by Angular, back end developed by Spring Boot, database - MySQL.',
    technologies: 'Angular, Spring Boot, MySQL',
    image: '/PortfolioShanika/images/employee-management.jpg',
    github: 'https://github.com/shanika97/EmployeeManagementSystem-frontendAngular'
  },

  {
    title: 'WorkLoad Management System',
    description: 'A web-based portal to facilitate efficient workload management for academic staff.',
    technologies: 'PHP, JavaScript, MySQL, HTML, CSS',
    image: '/PortfolioShanika/images/workload-management.jpg',
    github: 'https://github.com/shanika97/WorkLoadManagementSystem-main'
  },
  {
    title: 'E-Commerce Website For Furniture Shop',
    description: 'A simple e-commerce website ',
    technologies: 'HTML, CSS, Bootstrap, JavaScript, Spring Boot, MySQL',
    image: '/PortfolioShanika/images/furniture-ecommerce.png',
    github: 'https://github.com/shanika97/frontend-for-furniture-sofa-shop'
  },
 
  {
    title: 'Pizza Shop Management System',
    description: 'A management system for a pizza shop using C# and MySQL.',
    technologies: 'C#, MySQL',
    image: '/PortfolioShanika/images/pizza-shop-managemen.jpg',
    github: 'https://github.com/shanika97/Pizza-Shop-Managment'
  }


];

const Projects = () => {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4"><strong>Technologies:</strong> {project.technologies}</p>
              {project.github && (
                <a href={project.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
