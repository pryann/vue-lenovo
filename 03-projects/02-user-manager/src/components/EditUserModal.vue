<script setup>
import 'bootstrap/js/dist/modal.js'
import { useUserStore } from '../stores/user.js'
import { ref, watch } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const { updateUser } = useUserStore()
const userFormData = ref(props.user)
const closeButton = ref(null)

watch(
  () => props.user,
  (newValue) => {
    userFormData.value = { ...newValue }
  }
)

async function handleSaveClick() {
  try {
    // TODO: Implement toast notifitaion
    await updateUser(userFormData.value)
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
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
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
          </form>
        </div>
        <div class="modal-footer">
          <button
            ref="closeButton"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="handleSaveClick"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
