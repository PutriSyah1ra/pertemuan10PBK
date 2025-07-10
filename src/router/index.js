import { createRouter, createWebHistory } from 'vue-router';

// Komponen
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';
import ProdukCoklat from '../components/ProdukCoklat.vue'; // Ganti ProductList dengan ProdukCoklat
import Checkout from '../components/Checkout.vue';
import AddressBook from '../components/AddressBook.vue';
import EditAlamat from '../components/EditAlamat.vue';
import ThankYou from '../components/ThankYou.vue';
import About from '../components/About.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/product-list', component: ProdukCoklat },  // Pastikan komponen sesuai
  { path: '/checkout', component: Checkout },
  { path: '/address-book', component: AddressBook },
  { path: '/edit-alamat/:id', component: EditAlamat },
  { path: '/thank-you', component: ThankYou },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
