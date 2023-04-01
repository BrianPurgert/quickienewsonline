<template >
	<div class = "d-flex align-center flex-column" >
		<h1 class = "mt-10" >Quickie News Online</h1 >
		<v-card width = "500" >
			<v-img src = "/logo.svg" width = "400" class = "mx-auto" ></v-img >
			<v-card-title >QNO</v-card-title >
			<v-card-subtitle >get filled in on the news in minutes</v-card-subtitle >
			<v-card-text >
				<div v-for = "(news, index) in trendingNews" :key = "index" >
					<h2 >{{ news.name }}</h2 >
					<p v-if = "news.summary" >{{ news.summary }}</p >
					<button @click = "summarizeArticle(news.url, index)" >Summarize</button >
				</div >
			</v-card-text >
		</v-card >
		<v-btn class = "mt-10" >Quickie News Online</v-btn >
	</div >
</template >

<style >
</style >

<script setup >
import { ref, onMounted } from 'vue'
import axios              from './api'

const trendingNews = ref([])

async function fetchTrendingNews() {
	try {
		const response = await axios.get('/trending-news')
		trendingNews.value = response.data
	} catch (error) {
		console.error('Error fetching trending news:', error)
	}
}


async function summarizeArticle(article_url, index) {
	try {
		const response = await axios.post('/summarize', { article_url })
		trendingNews.value[index].summary = response.summary
	} catch (error) {
		console.error('Error summarizing the news article:', error)
	}
}

onMounted(() => {
	fetchTrendingNews()
})
</script >
