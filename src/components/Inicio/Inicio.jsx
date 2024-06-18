import React from "react";
import { Paper, Typography } from '@mui/material';
import './styles.css';

function Inicio() {
  return (
    <Paper>
      <div className="main-wrapper">
        <div id="contenedor-perfil">
          <Typography variant="h4">Leimy Páez Hurtado</Typography>
          <Typography variant="h5">Frontend Developer</Typography>
          <p id="parrafo-perfil">
            Mi nombre es Leimy Páez Hurtado, tengo 23 años y nací y crecí en Puerto
            Viejo, una pequeña región al sur de la provincia de Limón, rodeada de mar
            y bosque natural. Crecí en un hogar con apoyo incondicional por parte
            de mis padres, ambos profesionales, y de nacionalidad costarricense.
          </p>    
          <p id="parrafo-perfil">
            Estudié una parte de mi vida en escuela y colegio público, excepto mi
            último año de bachillerato, el cual lo culminé en el Instituto
            Centroamericano Adventista en el año 2018. Además, me considero una
            persona con valores como la honestidad, la empatía, la perseverancia y
            sobre todo la fe en Dios, lo cual me motiva en mi día a día.
          </p>
        </div>
        <div>
          <img id="imagen" src="/src/imagen.jpeg" width="250" alt="Perfil"></img>
        </div>
      </div>
    </Paper>
  );
}

export default Inicio;