<script setup>
import { computed } from 'vue'

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
})

const baseYoutubeEmbedUrl = 'https://www.youtube.com/embed'

const videoSrc = computed(() =>
  props.video.id.videoId
    ? `${baseYoutubeEmbedUrl}/${props.video.id.videoId}`
    : `${baseYoutubeEmbedUrl}/videoseries?list=${props.video.id.playlistId}`
)
</script>

<template>
  <div class="video-details">
    <div class="ratio ratio-16x9">
      <iframe :src="videoSrc" title="Video Player"></iframe>
    </div>
    <div>
      <h2 class="h4">{{ video.snippet.title }}</h2>
      <p class="lead">{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
