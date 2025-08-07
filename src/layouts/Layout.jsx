import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="#">Farbod</a> | React.js Practice
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Farbod with Love</p>
      </footer>
    </>
  );
}

export default Layout;
