import { useState } from 'react';
import styles from '../styles/Register.module.css';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.localH1}>Registro</h1>
      <form onSubmit={handleSubmit} className={styles.localForm}>
        <label className={styles.localLabel}>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={styles.localInput}
        />
        <label className={styles.localLabel}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.localInput}
        />
        <label className={styles.localLabel}>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.localInput}
        />
        <button type="submit" className={styles.localButton}>Registrarse</button>
      </form>
    </div>
  );
}
