<script setup>
import { ref } from 'vue';

// Reactive data for the form
const expenseName = ref('');
const amount = ref('');
const category = ref('');
const date = ref('');
const notes = ref('');

// Emit event for adding expense
const emit = defineEmits(['add-expense']);

// Method to handle form submission
const handleSubmit = () => {
  const expense = {
    name: expenseName.value,
    amount: parseFloat(amount.value),
    category: category.value,
    date: date.value,
    notes: notes.value,
  };

  // Emit 'add-expense' event with expense data
  emit('add-expense', expense);

  // Clear form fields
  expenseName.value = '';
  amount.value = '';
  category.value = '';
  date.value = '';
  notes.value = '';
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="expense-form">
    <div class="form-control">
      <label for="expenseName" class="label">Expense Name</label>
      <input type="text" id="expenseName" v-model="expenseName" required class="input" />
    </div>

    <div class="form-control">
      <label for="amount" class="label">Amount</label>
      <input type="number" id="amount" v-model="amount" required min="0" step="1" class="input" />
    </div>

    <div class="form-control">
      <label for="category" class="label">Category</label>
      <select id="category" v-model="category" required class="input">
        <option value="" disabled>Select category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div class="form-control">
      <label for="date" class="label">Date</label>
      <input type="date" id="date" v-model="date" required class="input" />
    </div>

    <div class="form-control">
      <label for="notes" class="label">Notes</label>
      <textarea id="notes" v-model="notes" class="input" />
    </div>

    <button type="submit" class="btn btn-primary">Add Expense</button>
  </form>
</template>

<style scoped>
.expense-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-control {
  display: flex;
  flex-direction: column;
}

.label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}
</style>

