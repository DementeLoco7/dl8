import styles from './BrandVoice.module.css';

export default function BrandVoice() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <h1>V30</h1>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Brand Voice</a>
          <a href="#">Guardados</a>
          <a href="#">Configuración</a>
        </nav>
        <button className={styles.saveButton}>Guardar</button>
      </aside>
      <div className={styles.main-content}>
        <h2 className={styles.sectionTitle}>Voz de Marca</h2>
        <div className={styles.container}>
          {/* Repite esto para cada tarjeta */}
          <div className={styles.card}>
            <h2>Detail</h2>
            <textarea className={styles.textarea} defaultValue="Preciso y específico. V30 proporciona información detallada y concreta."></textarea>
          </div>
          <div className={styles.card}>
            <h2>Structure</h2>
            <textarea className={styles.textarea} defaultValue="Directa y concisa. V30 va directo al grano, sin rodeos ni florituras innecesarias."></textarea>
          </div>
          {/* Añade las demás tarjetas aquí */}
        </div>
      </div>
    </div>
  );
}
