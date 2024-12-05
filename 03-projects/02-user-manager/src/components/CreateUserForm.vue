<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '../stores/user.js'

const createUserFormInitialState = {
  emailAddress: '',
  firstName: '',
  lastName: '',
}

const { createUser } = useUserStore()
const isFormVisible = ref(false)
const userFormData = reactive({ ...createUserFormInitialState })

function toggleFormVisibility() {
  isFormVisible.value = !isFormVisible.value
}

function resetForm() {
  Object.assign(userFormData, createUserFormInitialState)
}

function handleCloseForm() {
  toggleFormVisibility()
  resetForm()
}

async function handleSaveForm() {
  try {
    // TODO: Implement toast notifitaion
    await createUser(userFormData)
    resetForm()
  } catch (error) {
    // TODO: Implement toast notifitaion
    console.error(error)
  }
}
</script>

<template>
  <button
    class="btn btn-primary mb-5"
    @click="toggleFormVisibility"
    v-show="!isFormVisible"
  >
    Create User
  </button>
  <div v-show="isFormVisible" class="mb-5">
    <h2>Create new User</h2>
    <!-- TODO: Create a user form component and reuse in the EditUserModal and CreateUserForm components -->
    <form>
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
      <button
        type="button"
        class="btn btn-outline-secondary me-4"
        @click="handleCloseForm"
      >
        Close
      </button>
      <button type="button" class="btn btn-primary" @click="handleSaveForm">
        Save
      </button>
    </form>
  </div>
</template>

<style scoped></style>
