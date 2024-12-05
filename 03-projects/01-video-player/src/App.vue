<script setup>
import { onMounted, ref } from 'vue'
import { youtubeAPI, defaultParams } from './apis/youtubeAPI.js'
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetails from './components/VideoDetails.vue'
import QueryParams from './components/QueryParams.vue'

const videos = ref(null)
const selectedVideo = ref(null)
const maxResults = ref(10)

function selectVideo(video) {
  selectedVideo.value = video
}

async function searchVideos(query) {
  const response = await youtubeAPI.get('/search', {
    params: {
      ...defaultParams,
      maxResults: maxResults.value,
      q: query,
    },
  })

  videos.value = response.data.items
  // use van use watch to update selectedVideo AND/OR
  // use can use the selectVideo function too
  selectedVideo.value = response.data.items[0]
}

onMounted(async () => {
  await searchVideos('vuejs 3')
})
</script>

<template>
  <header>
    <div class="container">
      <SearchBar @on-search-submit="searchVideos" />
      <QueryParams v-model="maxResults" />
    </div>
  </header>
  <main class="bg-light py-4">
    <div class="container">
      <div v-if="videos" class="row">
        <div class="col-lg-8">
          <VideoDetails :video="selectedVideo" />
        </div>
        <div class="col-lg-4">
          <VideoList :videos="videos" @on-video-select="selectVideo" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
