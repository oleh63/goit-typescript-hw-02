import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: string;
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
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
      >
        <div onClick={handleClose}>
          <img src={image} className={styles.img} />
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
