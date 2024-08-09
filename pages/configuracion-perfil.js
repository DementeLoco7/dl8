import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ConfiguracionPerfil.module.css';

export default function ConfiguracionPerfil() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      setError('Por favor, completa el campo de texto.');
    } else {
      setError('');
      router.push('/brand-voice');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.localH1}>Configura con AI, tu propio Guioncito</h1>
        <p className={styles.note}>¡Atenti! Para crear tu Guioncito a medida, necesitamos un poco de tu magia. Contanos sobre tu negocio, tu marca personal, tus clientes y qué querés lograr con los guiones. Cuanta más data nos des, mejor va a quedar. Y tranquilo, podés actualizar la info cuando quieras.</p>
        <form onSubmit={handleSubmit} className={styles.localForm}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.localTextarea}
            placeholder="Pega el texto aquí"
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.localButton}>Configurar perfil</button>
        </form>
        <p className={styles.wordCount}>Palabras: {text.split(/\s+/).filter(Boolean).length}</p>
      </div>
      <div className={styles.rightColumn}>
        <h1>Siempre con tu toque personal, tu estilo único y esa esencia que te hace inconfundible.</h1>
        <p className={styles.customText}>Personaliza tu experiencia con Guioncito y dejános ayudarte a brillar en las redes.</p>
      </div>
    </div>
  );
}
