<script setup>
import {  Form, Field, ErrorMessage, configure } from "vee-validate";
import { object, string, ref } from "yup";

// Define validation schema using Yup
const schema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email address").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

// Submit function
const handleSubmit = (values) => {
  console.log("Sign-up successful with values:", values);
  alert("Sign-up successful!");
};

// Set global validation configuration
configure({
  validateOnInput: true,
});
</script>

<template>
  <div class="signup-form">
    <h2>Create an Account</h2>

    <!-- Sign-up Form -->
    <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ values }">
      <!-- This line defines a form using the VeeValidate Form component. 
           It binds the form submission handler to the `handleSubmit` function 
           and applies the `schema` for validation. The `v-slot` directive 
           destructures the `values` object from the slot provided by VeeValidate. -->
      <div class="form-control">
        <label for="name">Name</label>
        <Field name="name" id="name" placeholder="Enter your full name" class="input" />
        <ErrorMessage name="name" class="error" />
      </div>

      <!-- Email Field -->
      <div class="form-control">
        <label for="email">Email</label>
        <Field name="email" id="email" type="email" placeholder="Enter your email" class="input" />
        <ErrorMessage name="email" class="error" />
      </div>

      <!-- Password Field -->
      <div class="form-control">
        <label for="password">Password</label>
        <Field name="password" id="password" type="password" placeholder="Create a password" class="input" />
        <ErrorMessage name="password" class="error" />
      </div>

      <!-- Confirm Password Field -->
      <div class="form-control">
        <label for="confirmPassword">Confirm Password</label>
        <Field
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          class="input"
        />
        <ErrorMessage name="confirmPassword" class="error" />
      </div>

      <button type="submit" class="btn">Sign Up</button>
    </Form>

    <!-- Already Have an Account Section -->
    <div class="redirect">
      <p>Already have an account? <router-link to="/login" class="link">Log in</router-link></p>
    </div>
  </div>
</template>

<style scoped>
.signup-form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #4CAF50;
}

.form-control {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.input:focus {
  outline: none;
  border-color: #4CAF50;
}

.error {
  margin-top: 0.25rem;
  color: red;
  font-size: 0.875rem;
}

.btn {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #45a049;
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
