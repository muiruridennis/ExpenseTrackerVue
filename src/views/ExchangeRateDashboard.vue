<script setup>
import { ref, onMounted } from 'vue';
import { useCurrencyStore } from '@/stores/currencyStore';

const currencyStore = useCurrencyStore();

const amount = ref(0); // User input amount
const convertedAmount = ref(0);

// Fetch exchange rates when the page loads
onMounted(() => {
  currencyStore.fetchExchangeRates();
});

// Handle amount conversion
const handleConvert = () => {
  convertedAmount.value = currencyStore.convertAmount(amount.value);
};
</script>

<template>
  <div class="exchange-dashboard">
    <h1>Exchange Rate Dashboard</h1>
     <!-- Loading Indicator -->
     <div v-if="currencyStore.isLoading" class="loading">
      Loading exchange rates...
    </div>

    <!-- Error Message -->
    <div v-if="currencyStore.errorMessage" class="error">
      {{ currencyStore.errorMessage }}
    </div>

    <!-- Currency Conversion Section -->
    <section class="conversion">
      <h2>Currency Converter</h2>
      <div class="converter">
        <label>Base Currency:</label>
        <select v-model="currencyStore.baseCurrency" @change="currencyStore.fetchExchangeRates">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="KES">KES</option>

          <!-- Add more currencies as needed -->
        </select>

        <label>Target Currency:</label>
        <select v-model="currencyStore.targetCurrency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="KES">KES</option>
        </select>

        <label>Amount:</label>
        <input type="number" v-model="amount" placeholder="Enter amount" />
        <button @click="handleConvert">Convert</button>

        <div v-if="convertedAmount">
          <p>
            {{ amount }} {{ currencyStore.baseCurrency }} = 
            {{ convertedAmount }} {{ currencyStore.targetCurrency }}
          </p>
        </div>
      </div>
    </section>

    <!-- Exchange Rate Table -->
    <section class="exchange-table">
      <h2>Exchange Rates for {{ currencyStore.baseCurrency }}</h2>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rate, currency) in currencyStore.exchangeRates" :key="currency">
            <td>{{ currency }}</td>
            <td>{{ rate.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<style scoped>
.exchange-dashboard {
  padding: 2rem;
}

.conversion {
  margin-bottom: 2rem;
}

.converter {
  display: flex;
  gap: 1rem;
  align-items: center;
}

label {
  font-weight: bold;
}

input,
select,
button {
  padding: 0.5rem;
  margin: 0.2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th,
td {
  padding: 0.5rem;
  border: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: #f4f4f4;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
