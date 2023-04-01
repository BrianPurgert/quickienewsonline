const axios = require("axios");
const BING_NEWS_API_KEY = process.env.BING_NEWS_API_KEY;
const BING_NEWS_API_URL = "https://api.bing.microsoft.com/v7.0/news/trendingtopics";

module.exports = async (req, res) => {
  try {
    const response = await axios.get(BING_NEWS_API_URL, {
      headers: { "Ocp-Apim-Subscription-Key": BING_NEWS_API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trending news" });
  }
};