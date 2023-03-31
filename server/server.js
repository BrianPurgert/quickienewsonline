const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server is running on port ${ PORT }`)
})

// import axios and set up your Bing News API key:
const axios = require('axios')
require('dotenv').config()

const BING_NEWS_API_KEY = process.env.BING_NEWS_API_KEY
const BING_NEWS_API_URL = 'https://api.bing.microsoft.com/v7.0/news/trendingtopics'

// fetch trending news:
app.get('/trending-news', async (req, res) => {
	try {
		const response = await axios.get(BING_NEWS_API_URL, {
			headers: { 'Ocp-Apim-Subscription-Key': BING_NEWS_API_KEY }
		})
		res.json(response.data)
	} catch (error) {
		res.status(500).json({ message: 'Error fetching trending news' })
	}
})

// Create an endpoint to summarize news articles:
// 	a. In server.js, import openai and set up your OpenAI API key:

const openai = require('openai')
openai.apiKey = process.env.OPENAI_API_KEY

// Add a new route to summarize the news articles:
app.post('/summarize', async (req, res) => {
	const { article_url } = req.body
	console.log(article_url)
	try {
		const result = await openai.Completion.create({
			engine: 'text-davinci-002',
			prompt: `Please provide a summary of the news article at the following URL: ${ article_url }`,
			temperature: 0.7,
			max_tokens: 150,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0
		})

		res.json({ summary: result.choices[0].text.trim() })
	} catch (error) {
		res.status(500).json({ message: 'Error summarizing the news article' })
	}
})
