import styles from "./ImageCard.module.css";

const ImageCard = ({ item, onImageClick }) => {
  return (
    <div className={styles.contanier_img}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={styles.img}
        onClick={() => onImageClick(item.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
