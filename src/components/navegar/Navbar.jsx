import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Inicio from '../Inicio/Inicio';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import './styles.css';

export default function Navbar() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="home" label="Home" />
        <Tab value="projects" label="Projects" />
        <Tab value="skills" label="Skills" />
        <Tab value="contact" label="Contact" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {value === 'home' && <Inicio />}
        {value === 'projects' && <Projects />}
        {value === 'skills' && <Skills />}
        {value === 'contact' && <Contact />}
      </Box>
    </Box>
  );
}