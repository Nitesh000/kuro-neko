import axios from "axios";

const fetchAnime = axios.create({
  baseURL: "https://api.consumet.org/anime/gogoanime",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const baseURL = "https://api.consumet.org/anime/gogoanime";

export default fetchAnime;
