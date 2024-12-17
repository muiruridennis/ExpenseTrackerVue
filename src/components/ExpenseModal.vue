<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  expense: {
    type: Object,
    required: true,
  },
  isEditing: {
    type: Boolean, // Boolean to differentiate create/edit mode
    required: true,
  },
});

const emit = defineEmits(['save-expense', 'close-modal']);

// Local copy of the expense object for editing
const localExpense = ref({ ...props.expense });

// Watch for changes to props.expense
watch(
  () => props.expense,
  (newExpense) => {
    localExpense.value = { ...newExpense };
  }
);

// Save the expense (create or update)
const saveExpense = () => {
  emit('save-expense', localExpense.value);
};

// Close the modal
const closeModal = () => {
  emit('close-modal');
};
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>{{ isEditing ? 'Edit Expense' : 'Create Expense' }}</h2>
      <form @submit.prevent="saveExpense">
        <!-- Form Group -->
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="localExpense.name" id="name" placeholder="Expense name" required />
        </div>

        <div class="form-group">
          <label for="amount">Amount</label>
          <input
            type="number"
            v-model="localExpense.amount"
            id="amount"
            placeholder="e.g. 1000"
            required
          />
        </div>

        <div class="form-group">
          <label for="category">Category</label>
          <input v-model="localExpense.category" id="category" placeholder="e.g. Food, Travel" />
        </div>

        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" v-model="localExpense.date" id="date" required />
        </div>

        <div class="form-group">
          <label for="notes">Notes</label>
          <textarea
            v-model="localExpense.notes"
            id="notes"
            rows="3"
            placeholder="Optional notes about the expense"
          ></textarea>
        </div>

        <!-- Buttons -->
        <div class="form-buttons">
          <button type="submit" class="primary-btn">
            {{ isEditing ? 'Save Changes' : 'Add Expense' }}
          </button>
          <button type="button" class="secondary-btn" @click="closeModal">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal Content */
.modal-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 450px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
}

h2 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #333;
}

/* Form Styles */
.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.2s ease-in-out;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4caf50;
}

textarea {
  resize: none;
}

/* Buttons */
.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.primary-btn,
.secondary-btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.primary-btn {
  background-color: #4caf50;
  color: white;
}

.primary-btn:hover {
  background-color: #43a047;
}

.secondary-btn {
  background-color: #e0e0e0;
  color: #333;
}

.secondary-btn:hover {
  background-color: #d5d5d5;
}

/* Fade-In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
