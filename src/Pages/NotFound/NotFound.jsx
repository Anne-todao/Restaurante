// Imports aqui
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.errorWrapper}>
      <h1>404 ❌</h1>
      <p>Opa! Essa página não existe.</p>
      <link to="/" className={styles.backButton}>Voltar para Home</link>
    </div>
  );
}
export default NotFound;
