import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const NotFoundPage: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <h1>404 Not Found</h1>
    <p>Извините, такой страницы не существует.</p>
    <Link to="/"><button style={buttonStyles}>Домой</button></Link>
  </div>
);

export default NotFoundPage;
