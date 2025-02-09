import { useEffect, useState } from "react";

import { fetchPhotos } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import { Photo } from "./App.types";

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [page, setPage] = useState<number>(1);

  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const getPhotodData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        setErrorMessage("");
        const { results }: { results: Photo[] } = await fetchPhotos(
          query,
          page
        );
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

  const handleChangePage = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery: string): void => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleClickImage = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleClickImageClose = (): void => {
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
      {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleClickImageClose}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
