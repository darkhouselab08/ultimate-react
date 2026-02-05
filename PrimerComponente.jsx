import React from 'react';

/**
 * Componente: BienvenidaCurso
 * Objetivo: Verificar la configuración del entorno de desarrollo.
 */
const BienvenidaCurso = () => {
  // Datos de tu configuración actual
  const configuracion = {
    estudiante: "Programador en formación",
    ide: "Antigravity",
    terminal: "Warp",
    equipo: "Mac Pro",
    curso: "Ultimate React"
  };

  const manejarClick = () => {
    console.log("¡Entorno configurado con éxito!");
    alert("¡Listo para empezar el curso de React!");
  };

  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>🚀 Proyecto: {configuracion.curso}</h1>
      <p style={estilos.texto}>
        Hola, estoy programando en mi <strong>{configuracion.equipo}</strong> 
        usando <strong>{configuracion.ide}</strong> y <strong>{configuracion.terminal}</strong>.
      </p>
      
      <div style={estilos.tarjeta}>
        <h3>Estado del Entorno:</h3>
        <ul>
          <li>Node.js: ✅ Verificado</li>
          <li>Git/GitHub: ✅ Sincronizado</li>
          <li>IDE: ✅ Calibrado</li>
        </ul>
      </div>

      <button onClick={manejarClick} style={estilos.boton}>
        Verificar Configuración
      </button>
    </div>
  );
};

// Estilos básicos en línea para que se vea bien desde el inicio
const estilos = {
  contenedor: {
    padding: '20px',
    fontFamily: 'sans-serif',
    backgroundColor: '#f4f4f9',
    borderRadius: '10px',
    textAlign: 'center'
  },
  titulo: {
    color: '#61dafb'
  },
  tarjeta: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px',
    margin: '20px auto',
    maxWidth: '300px',
    textAlign: 'left'
  },
  boton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default BienvenidaCurso;