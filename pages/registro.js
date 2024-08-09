// pages/registro.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para registrar al usuario
    console.log({ nombre, email, password });

    // Redirigir a la página de configuración del perfil
    router.push('/configuracion-perfil');
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Registro</h1>
        <p>Escribe tus datos abajo para crear tu cuenta.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
