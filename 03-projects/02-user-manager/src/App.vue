<script setup>
import UsersTable from './components/UsersTable.vue'
import CreateUserForm from './components/CreateUserForm.vue'
</script>

<template>
  <header>
    <h1 class="bg-primary py-3 mb-4 text-white text-center">
      User manager application
    </h1>
  </header>
  <main class="container">
    <CreateUserForm />
    <UsersTable />
  </main>
</template>

<style scoped></style>
