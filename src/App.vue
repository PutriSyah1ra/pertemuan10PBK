<template>
  <div id="app">
    <!-- Background Image hanya untuk halaman selain login -->
    <div v-if="$route.path !== '/login'" class="background-image"></div>

    <!-- Navbar (hanya muncul di halaman selain login) -->
    <nav class="navbar" v-if="$route.path !== '/login'">
      <router-link to="/dashboard">Beranda</router-link>
      <router-link to="/product-list">Produk</router-link>
      <router-link to="/address-book">Riwayat</router-link>
      <router-link to="/about">Tentang</router-link>
      <router-link to="/login">Logout</router-link>
    </nav>

    <!-- Outlet Router -->
    <router-view />
  </div>
</template>

<style scoped>
/* === BACKGROUND IMAGE UNTUK HALAMAN SELAIN LOGIN === */
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://cdn0-production-images-kly.akamaized.net/0VrAeaeDIbxNRET4WMsErcgtS_o=/0x209:2048x1363/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3168320/original/038361100_1593675456-shutterstock_1076747045.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.9) blur(0.8px);
  z-index: -1;
}

/* === NAVBAR DENGAN GRADASI COKLAT === */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;

  background: linear-gradient(to right, #5d4037, #a1887f, #d7ccc8);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border-bottom: 1px solid rgba(93, 64, 55, 0.3);
  box-shadow: 0 4px 12px rgba(93, 64, 55, 0.3);

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  z-index: 10;
  border-radius: 0 0 12px 12px;
}

/* === LINK NAVBAR === */
.navbar a {
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background-color: #efebe9;
  color: #4e342e;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar a:hover {
  background-color: #d7ccc8;
  color: #3e2723;
}

.navbar a.router-link-exact-active {
  background-color: #6d4c41;
  color: white;
  font-weight: bold;
}

/* === RESPONSIVE NAVBAR === */
@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    padding: 10px 16px;
  }

  .navbar a {
    margin-bottom: 8px;
  }
}
</style>
