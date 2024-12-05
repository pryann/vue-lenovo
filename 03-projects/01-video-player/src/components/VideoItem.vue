<script setup>
defineProps({
  video: {
    type: Object,
    required: true,
  },
})

// can use define inside the VideoList components too
function handleEnter($event) {
  $event.target.click()
}
</script>

<template>
  <div
    role="button"
    tabindex="0"
    class="container p-1 video"
    @keyup.enter="handleEnter"
  >
    <div class="row">
      <div class="col">
        <img
          class="img-fluid"
          :src="video.snippet.thumbnails.medium.url"
          :alt="video.snippet.title"
        />
      </div>
      <div class="col">{{ video.snippet.title }}</div>
    </div>
  </div>
</template>

<style scoped></style>
