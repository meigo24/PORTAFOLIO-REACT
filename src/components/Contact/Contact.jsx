import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles.css';

function Contact() {
  return (
    <div className='Contacto'>
        <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <EmailIcon sx={{ marginRight: 1 }} />
        <Typography variant="body1">
          <Link href="mailto:leimy@example.com">leimont17@hotmail.com</Link>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <PhoneIcon sx={{ marginRight: 1 }} />
        <Typography variant="body1">
          +506 87339892
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <GitHubIcon sx={{ marginRight: 1 }} />
        <Typography variant="body1">
          <Link href="https://github.com/meigo24" target="_blank" rel="noopener">
            github.com/meigo24
          </Link>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <LinkedInIcon sx={{ marginRight: 1 }} />
        <Typography variant="body1">
          <Link href="https://www.linkedin.com/in/leimy-páez-1209aa296" target="_blank" rel="noopener">
            linkedin.com/in/leimypaez
          </Link>
        </Typography>
      </Box>
    </Box>
    </div>
    
  );
}

export default Contact;