import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Produk from '../views/produk.vue'
import Tentang from '../views/tentang.vue'
import Pesanan from '../views/pesanan.vue'
import DetailPesanan from '../views/detailpesanan.vue' // pastikan nama file sama persis (huruf kecil)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/produk', name: 'Produk', component: Produk },
  { path: '/tentang', name: 'Tentang', component: Tentang },
  { path: '/pesanan', name: 'Pesanan', component: Pesanan },
  { 
    path: '/detail-pesanan', 
    name: 'DetailPesanan', 
    component: DetailPesanan,
    props: route => ({
      nama: route.query.nama,
      noHP: route.query.noHP,
      total: route.query.total,
      metode: route.query.metode
    })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
