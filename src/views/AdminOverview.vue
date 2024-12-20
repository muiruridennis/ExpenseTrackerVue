<script setup>
import { useExpenseStore } from '@/stores/expenseStore';
import Card from '../components/Card.vue';
import ExpenseModal from '../components/ExpenseModal.vue';
import ExpenseList from '../components/ExpenseList.vue';

const expenseStore = useExpenseStore();




// Methods to set filters
const onCategoryChange = (event) => expenseStore.setCategoryFilter(event.target.value);
</script>
<template>
  <div class="dashboard">
    <section class="dashboard-stats">
      <Card class="card-stats">
        <template #header>Total Expenses</template>
        <template #content>${{ expenseStore.totalExpenses }}</template>
      </Card>
      <Card class="card-stats">
        <template #header>Top Expense</template>
        <template #content>${{ expenseStore.topExpense }}</template>
      </Card>
      <Card class="card-stats">
        <template #header>Categories</template>
        <template #content>{{ expenseStore.categories.length }}</template>
      </Card>
      <Card class="card-stats">
        <template #header>Recent Expenses</template>
        <template #content>
          <ul class="list-recent-expenses">
            <li v-for="expense in expenseStore.recentExpenses" :key="expense.id">
              {{ expense.name }} - ${{ expense.amount }}
            </li>
          </ul>
        </template>
      </Card>
    </section>
   



    <!-- Filter Section -->
    <div class="table-container">
      <h3 class="section-title">Expenses</h3>
    <section class="filters">
      <div class="filter-container">
        <div class="filter-item">
          <label>Category:</label>
          <select @change="onCategoryChange" class="filter-select">
            <option value="">All Categories</option>
            <option v-for="category in expenseStore.categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <div class="filter-item">
          <label>Amount Range:</label>
          <input type="number" v-model="expenseStore.amountMinFilter" placeholder="Min" class="filter-input" />
          <input type="number" v-model="expenseStore.amountMaxFilter" placeholder="Max" class="filter-input" />
        </div>

        <div class="filter-item">
          <label>Date Range:</label>
          <input type="date" v-model="expenseStore.dateFromFilter" class="filter-input" />
          <input type="date" v-model="expenseStore.dateToFilter" class="filter-input" />
        </div>
      </div>
    </section>

    <section class="expense-list">
      
      <button class="create-button" 
      @click="expenseStore.openCreateModal"
      >Create Expense</button>

      <ExpenseList 
        :expenses="expenseStore.filteredExpenses" 
        @edit-expense="expenseStore.openEditModal" 
        @delete-expense="expenseStore.deleteExpense" 
      />
    </section>
  </div>
    <!-- Modal Component -->
    <ExpenseModal
      v-if="expenseStore.showModal"
      :expense="expenseStore.currentExpense"
      :is-editing="expenseStore.isEditing"
      @save-expense="expenseStore.saveExpense"
      @close-modal="expenseStore.showModal = false"
    />
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.filter-select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.filter-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.card-stats {
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.list-recent-expenses {
  list-style: none;
  padding: 0;
  margin: 0;
}

.create-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.create-button:hover {
  background-color: #45a049;
}
.table-container {
  border: #4CAF50 2px solid;
  padding: 4rem;
}
.section-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #070707;
}
</style>

