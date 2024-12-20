import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { dummyExpenses } from '@/data/dummyExpenses.js';

export const useExpenseStore = defineStore('expense', () => {
  const expenses = ref(dummyExpenses);
  const showModal = ref(false);
  const isEditing = ref(false);
  const currentExpense = ref(null);

  // Filter state
  const categoryFilter = ref('');
  const amountMinFilter = ref(0);
  const amountMaxFilter = ref(Infinity);
  const dateFromFilter = ref('');
  const dateToFilter = ref('');

  // Computed properties for filtered expenses
  const filteredExpenses = computed(() => {
    return expenses.value.filter((expense) => {
      const isCategoryMatch = categoryFilter.value
        ? expense.category === categoryFilter.value
        : true;
      const isAmountMatch =
        expense.amount >= amountMinFilter.value &&
        expense.amount <= amountMaxFilter.value;
      const isDateMatch =
        (dateFromFilter.value ? new Date(expense.date) >= new Date(dateFromFilter.value) : true) &&
        (dateToFilter.value ? new Date(expense.date) <= new Date(dateToFilter.value) : true);

      return isCategoryMatch && isAmountMatch && isDateMatch;
    });
  });

  // Derived categories
  const categories = computed(() => {
    const allCategories = expenses.value.map((expense) => expense.category);
    return [...new Set(allCategories)]; // Unique categories
  });

  // Stats
  const totalExpenses = computed(() =>
    expenses.value.reduce((total, expense) => total + expense.amount, 0)
  );

  const topExpense = computed(() => {
    const top = expenses.value.reduce((max, expense) => (expense.amount > max ? expense.amount : max), 0);
    return top;
  });

  const recentExpenses = computed(() =>
    expenses.value.slice(-5).reverse()
  );

  // Methods to update filters
  const setCategoryFilter = (category) => (categoryFilter.value = category);
  const setAmountRangeFilter = (min, max) => {
    amountMinFilter.value = min;
    amountMaxFilter.value = max;
  };
  const setDateRangeFilter = (from, to) => {
    dateFromFilter.value = from;
    dateToFilter.value = to;
  };

  // Expense modal management
  const openCreateModal = () => {
    currentExpense.value = { id: null, name: '', amount: 0, category: '', date: '', notes: '' };
    isEditing.value = false;
    showModal.value = true;
  };

  const openEditModal = (expense) => {
    currentExpense.value = { ...expense };
    isEditing.value = true;
    showModal.value = true;
  };

  const saveExpense = (expense) => {
    if (isEditing.value) {
      const index = expenses.value.findIndex((e) => e.id === expense.id);
      if (index !== -1) expenses.value[index] = expense;
    } else {
      expense.id = expenses.value.length + 1;
      expenses.value.push(expense);
    }
    showModal.value = false;
  };

  const deleteExpense = (id) => {
    expenses.value = expenses.value.filter((expense) => expense.id !== id);
  };

  return {
    expenses,
    showModal,
    isEditing,
    currentExpense,
    categoryFilter,
    amountMinFilter,
    amountMaxFilter,
    dateFromFilter,
    dateToFilter,
    filteredExpenses,
    categories,
    totalExpenses,
    topExpense,
    recentExpenses,
    openCreateModal,
    openEditModal,
    saveExpense,
    deleteExpense,
    setCategoryFilter,
    setAmountRangeFilter,
    setDateRangeFilter,
  };
});
