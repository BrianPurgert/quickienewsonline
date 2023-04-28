const openai = require("openai");
openai.apiKey = process.env.OPENAI_API_KEY;

module.exports = async (req, res) => {
  const { article_url } = req.body;

  try {
    const result = await openai.Completion.create({
      engine: "davinci",
      prompt: `Please provide a summary of the news article at the following URL: ${article_url}`,
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.json({ summary: result.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ message: "Error summarizing the news article" });
  }
};