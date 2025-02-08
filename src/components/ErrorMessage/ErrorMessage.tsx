import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.error}>
      <h2>Oops! Something went wrong.</h2>
      {message && <p>{message}</p>}
      <p>Please try again later.</p>
    </div>
  );
};

export default ErrorMessage;
