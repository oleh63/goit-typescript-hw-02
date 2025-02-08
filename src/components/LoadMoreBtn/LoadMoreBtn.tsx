import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onChangePage }) => {
  return (
    <>
      <button className={styles.btn_load} onClick={onChangePage}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
