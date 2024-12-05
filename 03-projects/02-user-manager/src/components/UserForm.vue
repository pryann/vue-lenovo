<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

defineEmits(['update'])

const userFormData = ref({ ...props.userData })

watch(
  () => props.userData,
  (newValue) => {
    userFormData.value = { ...newValue }
  }
)
</script>

<template>
  <form @submit.prevent="$emit('update', userFormData)">
    <div class="mb-3">
      <label for="emailAddress">Email address:</label>
      <input
        type="email"
        id="emailAddress"
        class="form-control"
        v-model="userFormData.emailAddress"
      />
    </div>
    <div class="mb-3">
      <label for="firstName">First name:</label>
      <input
        type="text"
        id="firstName"
        class="form-control"
        v-model="userFormData.firstName"
      />
    </div>
    <div class="mb-3">
      <label for="lastName">Last name:</label>
      <input
        type="text"
        id="lastName"
        class="form-control"
        v-model="userFormData.lastName"
      />
    </div>
    <button class="btn btn-primary">Submit</button>
  </form>
</template>

<style scoped></style>
