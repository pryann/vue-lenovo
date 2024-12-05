import { apiClient } from '../utils/apiClient'

export async function fetchUsers() {
  const response = await apiClient.get('/users')
  return response.data
}

export function removeUser(userId) {
  apiClient.delete(`/users/${userId}`)
}

export async function updateUser(id, updateUserData) {
  const response = await apiClient.put(`/users/${id}`, updateUserData)
  return response.data
}

export async function createUser(userData) {
  const response = await apiClient.post('/users', userData)
  return response.data
}
