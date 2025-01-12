import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        overlayClassName={styles.overlay}
        className={styles.modal}
        onClick={handleClose}
      >
        <img src={image} className={styles.img} />
      </Modal>
    </>
  );
};

export default ImageModal;
