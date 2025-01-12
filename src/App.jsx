import { useEffect, useState } from "react";
import { fetchPhotos } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getPhotodData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        setErrorMessage("");
        const { results } = await fetchPhotos(query, page);
        setPhotos((prev) => [...prev, ...results]);
      } catch (error) {
        setIsError(true);
        setErrorMessage(
          error.response?.data?.errors?.[0] || "An unexpected error occurred."
        );
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPhotodData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleClickImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleClickImageClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={handleChangeQuery} />
      {isError && <ErrorMessage message={errorMessage} />}
      {!isError && photos.length > 0 && (
        <>
          <ImageGallery photos={photos} onImageClick={handleClickImage} />
          <LoadMoreBtn onChangePage={handleChangePage} />
        </>
      )}
      {isLoading && <Loader />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleClickImageClose}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
