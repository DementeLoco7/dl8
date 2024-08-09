import React from 'react';
import styles from '../styles/BrandVoice.module.css';
import Sidebar from '../components/Sidebar';

const BrandVoice = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Voz de Marca</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h2>Detail</h2>
                            <textarea className={styles.textarea} placeholder="Preciso y específico. V30 proporciona información detallada y concreta." />
                        </div>
                        <div className={styles.card}>
                            <h2>Structure</h2>
                            <textarea className={styles.textarea} placeholder="Directa y concisa. V30 va directo al grano, sin rodeos ni florituras innecesarias." />
                        </div>
                        <div className={styles.card}>
                            <h2>Tone</h2>
                            <textarea className={styles.textarea} placeholder="Confiado y exclusivo. V30 transmite un sentido de exclusividad y elite." />
                        </div>
                        <div className={styles.card}>
                            <h2>Voice</h2>
                            <textarea className={styles.textarea} placeholder="Audaz y visionaria. La voz de V30 es la de un líder innovador." />
                        </div>
                        <div className={styles.card}>
                            <h2>Name</h2>
                            <textarea className={styles.textarea} placeholder="V30" />
                        </div>
                        <div className={styles.card}>
                            <h2>Diction</h2>
                            <textarea className={styles.textarea} placeholder="Moderna y disruptiva. V30 utiliza un vocabulario actualizado." />
                        </div>
                        <div className={styles.card}>
                            <h2>Rhythm</h2>
                            <textarea className={styles.textarea} placeholder="Dinámico y enérgico. V30 mantiene un ritmo acelerado y vibrante." />
                        </div>
                        <div className={styles.card}>
                            <h2>Formality</h2>
                            <textarea className={styles.textarea} placeholder="Informal pero profesional. V30 utiliza un lenguaje accesible y cercano." />
                        </div>
                        <div className={styles.card}>
                            <h2>Perspective</h2>
                            <textarea className={styles.textarea} placeholder="Primera persona del plural ('nosotros') alternando con segunda persona ('tú')." />
                        </div>
                        <div className={styles.card}>
                            <h2>Pace</h2>
                            <textarea className={styles.textarea} placeholder="Rápido y ágil. La comunicación de V30 refleja la velocidad y agilidad del mercado digital." />
                        </div>
                        <div className={styles.card}>
                            <h2>Mood</h2>
                            <textarea className={styles.textarea} placeholder="Entusiasta y desafiante. V30 transmite energía positiva y reta a los usuarios." />
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Target de Audiencia</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h2>Name</h2>
                            <textarea className={styles.textarea} placeholder="Creadores de Élite Digitales" />
                        </div>
                        <div className={styles.card}>
                            <h2>Desires</h2>
                            <textarea className={styles.textarea} placeholder="Enter desires" />
                        </div>
                        <div className={styles.card}>
                            <h2>Role</h2>
                            <textarea className={styles.textarea} placeholder="Influencers de lifestyle con contratos de marcas importantes." />
                        </div>
                        <div className={styles.card}>
                            <h2>Daily Frustrations</h2>
                            <textarea className={styles.textarea} placeholder="Enter daily frustrations" />
                        </div>
                        <div className={styles.card}>
                            <h2>Pain Points</h2>
                            <textarea className={styles.textarea} placeholder="Enter pain points" />
                        </div>
                    </div>
                </div>
                <button className={styles.saveButton}>Save</button>
            </div>
        </div>
    );
};

export default BrandVoice;
