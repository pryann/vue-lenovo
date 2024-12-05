<script setup>
defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="max-result my-3 d-flex justify-content-center">
    <form class="form">
      <div class="input-group mb-3">
        <span class="input-group-text">Max results:</span>
        <input
          id="max-result"
          :value="modelValue"
          type="number"
          min="1"
          max="25"
          class="form-control"
          @input="$emit('update:modelValue', parseInt($event.target.value, 10))"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
