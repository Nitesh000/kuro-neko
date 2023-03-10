import express from "express";
import fetchAnime from "../axios/fetchAnime.js";
const router = express.Router();

// get top anime list api
router.get("/top-airing", async (req, res) => {
  const page = req.query.page || 1;
  try {
    const response = await fetchAnime.get("/top-airing", {
      params: {
        page,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

// search for anime
router.get("/search/:animeName", async (req, res) => {
  const animeName = req.params.animeName;
  const query = req.query;
  query.page = query.page || 1;
  try {
    const response = await fetchAnime.get(`/${animeName}`, {
      params: { ...query },
    });
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

// get recent episodes
router.get("/recent-episodes", async (req, res) => {
  // type 1: Japanese Dub and English Sub
  // type 2: English Dub and no sub
  // type 3: Chinese Dub, English Sub
  const page = req.query.page || 1;
  const type = req.query.type || 1;
  try {
    const response = await fetchAnime.get("/recent-episodes", {
      params: {
        page,
        type,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

//get anime info
router.get("/info/:animeName", async (req, res) => {
  const animeNmae = req.params.animeName;
  try {
    const response = await fetchAnime.get(`/info/${animeNmae}`);
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

//get anime episodes streaming links
router.get("/watch/:episodeId", async (req, res) => {
  const episodeId = req.params.episodeId;
  const server = req.query.server || "vidstreaming";
  try {
    const response = await fetchAnime.get(`/watch/${episodeId}`, {
      params: {
        server,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

// get anime episodes available servers
router.get("/servers/:episodeId", async (req, res) => {
  const episodeId = req.params.episodeId;
  try {
    const response = await fetchAnime.get(`/servers/${episodeId}`);
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

export default router;
