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

  // returns a unique id, which is greater by 1, than the current maximum id
  function generateId() {
    return Math.max(...users.value.map((user) => user.id), 0) + 1
  }

  async function createUser(userData) {
    userData.id = generateId()
    const user = await userAPI.createUser(userData)
    // not mutated, reassigned
    users.value = [user, ...users.value]
  }

  return {
    users,
    fetchUsers,
    removeUser,
    updateUser,
    createUser,
  }
}
