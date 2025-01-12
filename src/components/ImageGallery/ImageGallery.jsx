import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={styles.list}>
      {photos.map((item) => (
        <li className={styles.item} key={item.id}>
          <div>
            <ImageCard item={item} onImageClick={onImageClick} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
