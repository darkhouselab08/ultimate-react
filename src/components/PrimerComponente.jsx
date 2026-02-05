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

// Estilos modernos con diseño premium
const estilos = {
  contenedor: {
    padding: '40px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    maxWidth: '600px',
    margin: '0 auto'
  },
  titulo: {
    color: '#667eea',
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: '700'
  },
  texto: {
    fontSize: '1.1rem',
    color: '#333',
    lineHeight: '1.6',
    marginBottom: '30px'
  },
  tarjeta: {
    backgroundColor: '#f8f9fa',
    border: '2px solid #667eea',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '400px',
    textAlign: 'left',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.1)'
  },
  boton: {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
  }
};

export default BienvenidaCurso;