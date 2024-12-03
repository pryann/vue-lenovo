<script setup>
import { ref } from 'vue'
import LifecycleHooks from './components/LifecycleHooks.vue'
import UserForm from './components/userForm.vue'

const showHooks = ref(true)

setTimeout(() => {
  showHooks.value = false
}, 5000)
</script>

<template>
  <main>
    <UserForm />
    <LifecycleHooks v-if="showHooks" />
  </main>
</template>

<style scoped></style>
