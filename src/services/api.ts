import axios from "axios";
import { Photo } from "../components/App/App.types";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "HCitx9vUVehlHjE_eSe3KXCWcxgRLuPBQiV6Qy5BpQE";

interface FetchPhotosResponse {
  results: Photo[];
}

export const fetchPhotos = async (
  query: string,
  page: number
): Promise<FetchPhotosResponse> => {
  const { data } = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      page,
      query,
      client_id: ACCESS_KEY,
    },
  });
  return data;
};
