// pages/dashboard.js
const Dashboard = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <a href="/dashboard?section=scripts">Creador de guiones V30</a>
        <a href="/dashboard?section=saved">Guardados</a>
        <a href="/dashboard?section=settings">Configuración</a>
      </nav>
      <div className="content">
        <h1>Brand Voice</h1>
        <div className="card">
          <h3>¡Bienvenido al Creador de Guiones!</h3>
          <textarea placeholder="Escribe tu guion aquí..."></textarea>
          <button>Guardar Guion</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

