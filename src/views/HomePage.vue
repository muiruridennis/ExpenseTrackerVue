<script setup>
// Handle "Get Started" action
const getStarted = () => {
  console.log("Redirecting to sign-up page...");
  // Placeholder for redirection logic
};
</script>

<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Take Control of Your Finances</h1>
        <p class="hero-subtitle">
          Manage your expenses effortlessly and make smarter financial decisions.
        </p>
        <button class="cta-button" @click="getStarted">Get Started</button>
      </div>
      <div class="hero-image">
        <img src="../assets/expense-tracker-hero1.jpg" alt="Expense Tracker Preview" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2 class="section-title">Why Choose Us?</h2>
      <div class="feature-list">
        <div class="feature-item">
          <img src="../assets/icon-track.jpg" alt="Track Expenses" />
          <h3>Track Expenses</h3>
          <p>Monitor your daily spending habits and categorize your expenses easily.</p>
        </div>
        <div class="feature-item">
          <img src="../assets/icon-budget.jpg" alt="Set Budgets" />
          <h3>Set Budgets</h3>
          <p>Plan your finances with tailored budgets for different categories.</p>
        </div>
        <div class="feature-item">
          <img src="../assets/icon-analytics.jpg" alt="Gain Insights" />
          <h3>Gain Insights</h3>
          <p>Analyze your financial data with detailed charts and reports.</p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits">
      <h2 class="section-title">Simplify Your Financial Life</h2>
      <p class="benefits-description">
        Our app makes managing your finances intuitive and stress-free. Save time, avoid overspending, and stay on top of your money.
      </p>
      <ul class="benefits-list">
        <li>✔️ Easy-to-use interface</li>
        <li>✔️ Safe and secure data management</li>
        <li>✔️ Access from anywhere, anytime</li>
      </ul>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Expense Tracker. All rights reserved.</p>
      <nav>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Contact Us</a>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
/* General Styles */
.landing-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Hero Section */
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  border-bottom: 2px solid #4CAF50;
}

.hero-content {
  max-width: 50%;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #4CAF50;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #4CAF50;
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #45a049;
}

.hero-image img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Features Section */
.features {
  text-align: center;
  padding: 3rem 2rem;
  background-color: #fff;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #4CAF50;
}

.feature-list {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.feature-item {
  text-align: center;
  max-width: 30%;
}

.feature-item img {
  width: 80px;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.feature-item p {
  color: #777;
}

/* Benefits Section */
.benefits {
  padding: 3rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.benefits-description {
  margin-bottom: 2rem;
  color: #555;
}

.benefits-list {
  list-style: none;
  padding: 0;
  color: #4CAF50;
  font-size: 1.25rem;
}

/* Footer */
.footer {
  text-align: center;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
}

.footer a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
