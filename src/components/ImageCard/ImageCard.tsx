import { Photo } from "../App/App.types";
import styles from "./ImageCard.module.css";

type ImageCardProps = {
  item: Photo;
  onImageClick: (imageUrl: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ item, onImageClick }) => {
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
