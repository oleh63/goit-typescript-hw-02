import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "HCitx9vUVehlHjE_eSe3KXCWcxgRLuPBQiV6Qy5BpQE";

export const fetchPhotos = async (query, page) => {
  const { data } = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      page,
      query,
      client_id: ACCESS_KEY,
    },
  });
  return data;
};
