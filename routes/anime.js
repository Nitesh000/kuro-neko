const router = require("express").Router();
const axios = require("axios");
const { BASEURL } = require("../index");

router.get("/top-airing", async (req, res) => {
  const page = req.params.page || 1;
  const response = await axios.get(`${BASEURL}/anime/top-airing?page=${page}`);
  res.json(response.data);
});

module.exports = router;
