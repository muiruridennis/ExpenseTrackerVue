<script setup>
import { ref, computed } from 'vue';
import ExpenseList from '@/components/ExpenseList.vue';
import ExpenseModal from '@/components/ExpenseModal.vue';
import Card from '@/components/Card.vue';
import { dummyExpenses } from '@/data/dummyExpenses.js';

const expenses = ref(dummyExpenses);
const showModal = ref(false);
const isEditing = ref(false); // Boolean to differentiate between create/edit mode
const currentExpense = ref(null); // Holds the current expense being edited or created

// Total expenses (example of computed property)
const totalExpenses = computed(() =>
  expenses.value.reduce((sum, expense) => sum + expense.amount, 0)
);
// Computed property for unique categories
const categories = computed(() =>
  [...new Set(expenses.value.map((expense) => expense.category))]
);

// Computed property for the highest expense
const topExpense = computed(() =>
  Math.max(...expenses.value.map((expense) => expense.amount))
);

// Computed property for the most recent expenses
const recentExpenses = computed(() =>
  expenses.value.slice(0, 3)
);

// Open modal for creating a new expense
const openCreateModal = () => {
  currentExpense.value = {
    id: null,
    name: '',
    amount: 0,
    category: '',
    date: '',
    notes: '',
  };
  isEditing.value = false; // Set mode to "create"
  showModal.value = true;
};

// Open modal for editing an existing expense
const openEditModal = (expense) => {
  currentExpense.value = { ...expense }; // Clone existing expense
  isEditing.value = true; // Set mode to "edit"
  showModal.value = true;
};

// Save or update expense
const saveExpense = (expense) => {
  if (isEditing.value) {
    // Update existing expense
    const index = expenses.value.findIndex((e) => e.id === expense.id);
    if (index !== -1) {
      expenses.value[index] = expense;
    }
  } else {
    // Create new expense
    expense.id = expenses.value.length + 1; // Simple ID assignment
    expenses.value.push(expense);
  }
  showModal.value = false;
};

const deleteExpense = (id) => {
  expenses.value = expenses.value.filter((expense) => expense.id !== id);
};
</script>

<template>
  <div class="dashboard">
    <!-- Create Expense Button -->
   
    <!-- Dashboard Stats -->
    <section class="dashboard-stats">
      <Card>
        <template #header>Total Expenses</template>
        <template #content>${{ totalExpenses }}</template>
      </Card>
      <Card>
        <template #header>Top Expense</template>
        <template #content>${{ topExpense }}</template>
      </Card>
      <Card>
        <template #header>Categories</template>
        <template #content>{{ categories.length }}</template>
      </Card>
      <Card>
        <template #header>Recent Expenses</template>
        <template #content>
          <ul>
            <li v-for="expense in recentExpenses" :key="expense.id">
              {{ expense.name }} - ${{ expense.amount }}
            </li>
          </ul>
        </template>
      </Card>
    </section>

    <section class="actions">
      <button class="create-button" @click="openCreateModal">Create Expense</button>
      <ExpenseList 
        :expenses="expenses" 
        @edit-expense="openEditModal" 
        @delete-expense="deleteExpense" 
      />
    </section>


    <!-- Modal Component -->
    <ExpenseModal
      v-if="showModal"
      :expense="currentExpense"
      :is-editing="isEditing"
      @save-expense="saveExpense"
      @close-modal="showModal = false"
    />
  </div>
</template>


<style scoped>
.dashboard {
  padding: 2rem;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.dashboard-table {
  margin-top: 2rem;
}
.create-button {
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

.create-button:hover {
  background-color: #218838;
}
</style>