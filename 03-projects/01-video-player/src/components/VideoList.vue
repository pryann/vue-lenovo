<script setup>
import VideoItem from './VideoItem.vue'

defineProps({
  videos: {
    type: Array,
    required: true,
  },
})

// can use define inside the VideoItem components too
defineEmits(['on-video-select'])
</script>

<template>
  <VideoItem
    v-for="(video, index) in videos"
    :key="index"
    :video="video"
    @click="$emit('on-video-select', video)"
  />
</template>

<style scoped></style>
