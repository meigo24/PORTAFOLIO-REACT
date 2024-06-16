import React from "react";
import "./styles.css";

function Inicio() {
  return (
    <>
      <div className="contenedor-perfil">
        <h1>Leimy Páez Hurtado</h1>
        <h2>Frontend Developer</h2>
      
    <img src="imagen.jpeg" width="250" ></img>

        <p className="parrafo-perfil">
          Mi nombre es Leimy Páez Hurtado, tengo 23 años y nací y crecí en Puerto
          Viejo, una pequeña región al sur de la provincia de Limón, rodeada de mar
          y bosque natural. Crecí en un hogar con apoyo incondicional por parte
          de mis padres, ambos profesionales, y de nacionalidad costarricense.
        </p>

        <p className="parrafo-perfil">
          Estudié una parte de mi vida en escuela y colegio público, excepto mi
          último año de bachillerato, el cual lo culminé en el Instituto
          Centroamericano Adventista en el año 2018. Además, me considero una
          persona con valores como la honestidad, la empatía, la perseverancia ySS
          sobre todo la fe en Dios, lo cual me motiva en mi día a día.
        </p>
      </div>
    </>
  );
}

export default Inicio;
