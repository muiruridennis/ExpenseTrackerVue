import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AdminOverview from '../views/AdminOverview.vue';
import Profile from '../views/Profile.vue';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../views/SignupPage.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage,
  },
  {
    path: '/dashboard',
    children: [
        { path: '', component: AdminOverview },
        { path: 'profile', component: Profile },
        // { path: 'users/:id', component: AdminUserDetails },
      ], 
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound, // Optional: Add a "404 - Page Not Found" view
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
