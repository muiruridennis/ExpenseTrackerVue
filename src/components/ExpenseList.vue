<script setup>

defineProps({
  expenses: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['delete-expense', 'edit-expense']);

const handleDelete = (id) => {
  emit('delete-expense', id);
};

const handleEdit = (expense) => {
  emit('edit-expense', expense); // Emit the entire expense object
};
</script>

<template>
  <div class="expense-list">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Notes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in expenses" :key="expense.id">
          <td>{{ expense.id }}</td>
          <td>{{ expense.name }}</td>
          <td>{{ expense.amount.toFixed(2) }}</td>
          <td>{{ expense.category }}</td>
          <td>{{ expense.date }}</td>
          <td>{{ expense.notes }}</td>
          <td>
            <button @click="handleDelete(expense.id)">Delete</button>
            <button class="edit-button" @click="handleEdit(expense)">Edit</button>
          </td>
        </tr>
        <tr v-if="!expenses.length">
          <td colspan="7" class="no-data">No expenses to display</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.expense-list {
  margin-top: 2rem;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
}

button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  margin-right: 1rem;
}

button:hover {
  background-color: #e53935;
}
.edit-button{
  background-color: #3939f7;
}

.no-data {
  text-align: center;
  font-style: italic;
  color: #666;
}
</style>