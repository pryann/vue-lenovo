<script setup>
import { reactive } from 'vue'
import InputField from './InputField.vue'

const userFormInitialState = {
  email: '',
  firstName: '',
  lastName: '',
}

const userForm = reactive({ ...userFormInitialState })

function handleSubmit() {
  // real-world scenario: send the form data to the server, use fetch API, axios, etc.
  console.log(JSON.stringify(userForm))
  Object.assign(userForm, userFormInitialState)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <InputField
      v-model="userForm.email"
      type="email"
      id="email"
      name="email"
      label="Email address"
    />
    <InputField
      v-model="userForm.firstName"
      type="text"
      id="firstName"
      name="firstName"
      label="First name"
    />
    <InputField
      v-model="userForm.lastName"
      type="text"
      id="lastName"
      name="lastName"
      label="Last name"
    />
    <button type="submit">Send</button>
  </form>
</template>

<style scoped>
button {
  margin-top: 1rem;
  display: block;
}
</style>
