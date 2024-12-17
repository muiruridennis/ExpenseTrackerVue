<script setup>
import { ref } from 'vue';

// Reactive state for form fields
const email = ref('');
const password = ref('');
const errorMessage = ref('');

// Handle form submission
const handleLogin = () => {
  errorMessage.value = ''; // Reset error message

  // Basic validation
  if (!email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields.';
    return;
  }

  console.log('Logging in with:', email.value, password.value);

  // Placeholder for authentication logic (connect to backend API)
  // Simulate success or failure
  const isSuccess = email.value === 'user@example.com' && password.value === 'password123';
  if (isSuccess) {
    alert('Login successful! Redirecting...');
    // Redirect logic can be added here
  } else {
    errorMessage.value = 'Invalid email or password.';
  }
};
</script>

<template>
  <div class="login-form">
    <h2>Login</h2>

    <!-- Error Message -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <!-- Form -->
    <form @submit.prevent="handleLogin">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit" class="btn">Login</button>
    </form>
    <div class="redirect">
      <p>Don't have an account? <router-link to="/signup" class="link">Create an account</router-link></p>
    </div>
  </div>
</template>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-control {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-bottom: 1rem;
  text-align: center;
}
.redirect {
  text-align: center;
  margin-top: 1.5rem;
}

.link {
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
}

.link:hover {
  text-decoration: underline;
}
</style>
