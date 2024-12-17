<script setup>
import { defineProps } from 'vue';

// Define props
defineProps({
  header: {
    type: String,
    required: false,
    default: '', // Optional header as a prop
  },
  footer: {
    type: String,
    required: false,
    default: '', // Optional footer as a prop
  },
  hoverEffect: {
    type: Boolean,
    default: true, // Toggle for hover effect
  },
});
</script>

<template>
  <div :class="['card', { 'card-hover': hoverEffect }]">
    <!-- Header: Use slot if provided, fallback to header prop -->
    <div v-if="header || $slots.header" class="card-header">
      <slot name="header">{{ header }}</slot>
    </div>

    <!-- Main content -->
    <div class="card-content">
      <slot name="content"></slot>
    </div>

    <!-- Footer: Use slot if provided, fallback to footer prop -->
    <div v-if="footer || $slots.footer" class="card-footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: box-shadow 0.3s ease;
}

.card-hover:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.card-header {
  font-weight: bold;
  margin-bottom: 1rem;
}

.card-content {
  color: #555;
}

.card-footer {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #777;
  border-top: 1px solid #ddd;
  padding-top: 0.5rem;
}
</style>
