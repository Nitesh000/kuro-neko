import axios from "axios";

const fetchAnime = axios.create({
  baseURL: "https://api.consumet.org/anime/gogoanime",
});

export default fetchAnime;
