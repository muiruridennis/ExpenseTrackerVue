<template>
  <nav class="navbar">
    <div class="logo">Expense Tracker</div>
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <ul class="nav-links" :class="{ active: menuOpen }">
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li><router-link to="/dashboard" class="nav-link">Dashboard</router-link></li>
      <li><router-link to="/login" class="nav-link">Login</router-link></li>
      <li><router-link to="/signup" class="nav-link">Sign Up</router-link></li>

    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #4CAF50;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #e0ffe0;
}

/* Responsive styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    background-color: #4CAF50;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem 0;
  }

  .nav-links.active {
    display: flex;
  }
}
</style>
