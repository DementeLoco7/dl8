import { useState } from 'react';
import styles from '../styles/Config.module.css';

export default function CreateProfile() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.localH1}>Configuración con AI, tu propio V30</h1>
      <form onSubmit={handleSubmit} className={styles.localForm}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.localTextarea}
          placeholder="Pega el texto aquí"
        />
        <button type="submit" className={styles.localButton}>Configurar perfil</button>
      </form>
    </div>
  );
}
