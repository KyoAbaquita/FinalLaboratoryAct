import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <div className="container my-5" style={containerStyle}>
      <h1 className="text-center text-success mb-4">My Projects</h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h3 className="card-title text-primary">Project Management System Developme</h3>
              <p className="card-text">
              Klick Inc. struggles with managing multiple projects simultaneously. Their current process of tracking tasks, managing resources, monitoring budgets, and communicating with team members is inefficient and prone to errors. The company needs a centralized Project Management System to help their teams organize work, assign tasks, monitor project progress, track budgets, and improve communication among team members and stakeholders.
              </p>
              <p><strong>Technologies Used:</strong> React,Laravel, JavaScript</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h3 className="card-title text-primary">E-Commerce System</h3>
              <p className="card-text">
              Create a full-stack eCommerce system using React for the frontend and Laravel for the backend. The
              system will include product management, checkout monitoring system, and a customer-facing storefront.
              </p>
              <p><strong>Technologies Used:</strong> React, Laravel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: '1000px',
  padding: '0 1rem',
};

const cardStyle = {
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const projectItemStyle = {
  backgroundColor: '#fff',
  padding: '1rem',
  marginBottom: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
};

export default Projects;
