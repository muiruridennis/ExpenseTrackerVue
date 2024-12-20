import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useCurrencyStore = defineStore('currency', () => {
  // State
  const baseCurrency = ref('USD');
  const targetCurrency = ref('USD');
  const exchangeRates = ref({});
  const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API;

  // New states for loading and error
  const isLoading = ref(false);
  const errorMessage = ref(null);

  // Fetch Exchange Rates
  const fetchExchangeRates = async () => {
    isLoading.value = true; // Start loading
    errorMessage.value = ''; // Reset error

    try {
      const response = await axios.get(
        `https://api.exchangerate.host/latest?base=${baseCurrency.value}&access_key=${apiKey}`
      );

      // Handle response
      if (response.data.success) {
        exchangeRates.value = response.data.rates;
      } else {
        throw new Error(response.data.error?.info || 'Failed to fetch exchange rates.');
      }
    } catch (error) {
      console.error('Failed to fetch exchange rates:', error.message);
      errorMessage.value = error.message || 'Something went wrong. Please try again later.';
    } finally {
      isLoading.value = false; // Stop loading
    }
  };

  // Convert Amount
  const convertAmount = (amount) => {
    const rate = exchangeRates.value[targetCurrency.value] || 1;
    return (amount * rate).toFixed(2);
  };

  return {
    baseCurrency,
    targetCurrency,
    exchangeRates,
    fetchExchangeRates,
    convertAmount,
    isLoading,
    errorMessage,
  };
});
