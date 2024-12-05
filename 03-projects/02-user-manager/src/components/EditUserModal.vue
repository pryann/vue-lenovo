<script setup>
import 'bootstrap/js/dist/modal.js'
import { useUserStore } from '../stores/user.js'
import { ref } from 'vue'
import UserForm from './UserForm.vue'

defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const { updateUser } = useUserStore()
const closeButton = ref(null)

async function handleSaveClick(userFormData) {
  try {
    // TODO: Implement toast notifitaion
    await updateUser(userFormData)
    closeButton.value.click()
  } catch (error) {
    // TODO: Implement toast notifitaion
    console.error(error)
  }
}
</script>

<template>
  <div id="editUserModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit user</h5>
          <button
            ref="closeButton"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <UserForm :userData="user" @update="handleSaveClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
