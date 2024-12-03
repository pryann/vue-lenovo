<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label :for="id">{{ label }}:</label>
  <input
    :type="type"
    :id="id"
    :name="name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
</style>
