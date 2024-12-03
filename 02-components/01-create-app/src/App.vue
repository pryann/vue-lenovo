<script setup>
import { ref } from 'vue'
import MainNavigation from './components/MainNavigation.vue'
import SiteContent from './components/SiteContent.vue'
import SiteFooter from './components/SiteFooter.vue'

const title = ref('Vue 3')

setTimeout(() => {
  title.value = 'NAV'
}, 2000)
</script>

<template>
  <div>
    <MainNavigation :nav-title="title" />
    <SiteContent />
    <SiteFooter />
  </div>
</template>

<style scoped></style>
