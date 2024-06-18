import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import './styles.css';

function Skills() {
  return (
    <div className='habilidades'>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <div className="skills-lists">
          <div className="skills-column">
            <Typography variant="h5" gutterBottom>Habilidades</Typography>
            <List>
              <ListItem>
                <ListItemText primary="HTML" secondary="Nivel: Básico" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Python" secondary="Nivel: Intermedio" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Java" secondary="Nivel: Básico" />
              </ListItem>
            </List>
          </div>
          <div className="skills-column">
            <Typography variant="h5" gutterBottom>Educacion</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Primaria" secondary="Finalizada" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Secundaria" secondary="Finalizada" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Universidad" secondary="En proceso" />
              </ListItem>
            </List>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Skills;