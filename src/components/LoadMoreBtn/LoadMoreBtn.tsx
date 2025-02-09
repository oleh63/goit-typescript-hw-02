import styles from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onChangePage: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onChangePage }) => {
  return (
    <>
      <button className={styles.btn_load} onClick={onChangePage}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
