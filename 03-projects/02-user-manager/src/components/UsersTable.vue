<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '../stores/user.js'
import EditUserModal from './EditUserModal.vue'

const { users, fetchUsers, removeUser } = useUserStore()
const selectedUser = ref({})

function selectUser(user) {
  selectedUser.value = user
}

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div>
    <table class="table table-striped table-hover table-fixed">
      <thead>
        <tr>
          <th>Id</th>
          <th>Fisrt name</th>
          <th>Last name</th>
          <th>Email addess</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.emailAddress }}</td>
          <td>
            <button
              class="btn btn-primary me-2"
              data-bs-toggle="modal"
              data-bs-target="#editUserModal"
              @click="selectUser(user)"
            >
              Edit
            </button>
            <button class="btn btn-danger" @click="removeUser(user.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <EditUserModal :user="selectedUser" />
</template>

<style scoped></style>
