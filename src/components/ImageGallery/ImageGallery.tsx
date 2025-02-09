import { Photo } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

type ImageGalleryProps = {
  photos: Photo[];
  onImageClick: (imageUrl: string) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  onImageClick,
}) => {
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
