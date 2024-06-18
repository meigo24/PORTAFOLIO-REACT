import React from 'react';
import { Typography, Link } from '@mui/material';
import './styles.css';

function Projects() {
  return (
    <div className='Proyecto'>
      <Typography variant="h4">Projects</Typography>
      <div>
        <Typography variant="h6">Project 1: Portfolio Website</Typography>
        <Link href="https://github.com/meigo24/portfolio-website" target="_blank" rel="noopener">
          View on GitHub
        </Link>
      </div>
      <div>
        <Typography variant="h6">Project 2: Todo App</Typography>
        <Link href="https://github.com/meigo24/todo-app" target="_blank" rel="noopener">
          View on GitHub
        </Link>
      </div>
      <div>
        <Typography variant="h6">Project 3: Blog Platform</Typography>
        <Link href="https://github.com/meigo24/blog-platform" target="_blank" rel="noopener">
          View on GitHub
        </Link>
      </div>
      {/* Añade más proyectos según sea necesario */}
    </div>
  );
}

export default Projects;