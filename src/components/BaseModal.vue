<!-- BaseModal.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue';

// Props for visibility and modal content
defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: 'Modal Title',
  },
});

// Emit event to close the modal
const emit = defineEmits(['close']);
</script>

<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <h3>{{ title }}</h3>
        <button @click="emit('close')">X</button>
      </div>
      <!-- Modal Body -->
      <div class="modal-body">
        <slot></slot>
      </div>
      <!-- Modal Footer -->
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  width: 400px;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-footer {
  margin-top: 1rem;
  text-align: right;
}

button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #d32f2f;
}
</style>
