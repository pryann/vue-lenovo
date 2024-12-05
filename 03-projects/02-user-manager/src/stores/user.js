import { ref } from 'vue'
import * as userAPI from '../apis/usersAPI'

const users = ref([])

export function useUserStore() {
  async function fetchUsers() {
    users.value = await userAPI.fetchUsers()
  }

  async function removeUser(userId) {
    // Never ever use this in production!!!
    const isConfirmed = window.confirm('Are you sure to remove this user?')
    if (isConfirmed) {
      await userAPI.removeUser(userId)
      // Not mutated the state directly
      users.value = users.value.filter((user) => user.id !== userId)
    }
  }

  async function updateUser(updateUserData) {
    const { id } = updateUserData
    const updatedUser = await userAPI.updateUser(id, updateUserData)
    users.value = users.value.map((user) =>
      user.id === id ? updatedUser : user
    )
  }

  return {
    users,
    fetchUsers,
    removeUser,
    updateUser,
  }
}
