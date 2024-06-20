import React from 'react';
import { Typography, Link } from '@mui/material';
import './styles.css';

function Projects() {
  return (
    <div className='Proyecto'>
      <Typography variant="h4">Projects</Typography>
      <div>
        <Typography variant="h6">Project 1: Perfil HTML</Typography>
        <Link href="https://github.com/meigo24/mi-perfil-profesional" target="_blank" rel="noopener">
          View on GitHub
        </Link>
      </div>
      <div>
        <Typography variant="h6">Project 2:Portfolio_React</Typography>
        <Link href="https://github.com/meigo24/PORTAFOLIO-REACT" target="_blank" rel="noopener">
          View on GitHub
        </Link>
      </div>
      <div>
        <Typography variant="h6">Project 3: Diseño Calculadora</Typography>
        <Link href="https://github.com/meigo24/miniproyecto1" target="_blank" rel="noopener">
          View on GitHub
        </Link>
      </div>
      
    </div>
  );
}

export default Projects;