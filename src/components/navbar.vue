<template>
  <nav class="sidebar">
    <h1 class="brand">ADA COKLAT</h1>
    <router-link to="/" exact-active-class="active">Beranda</router-link>
    <router-link to="/produk" exact-active-class="active">Produk</router-link>
    <router-link to="/pesanan">Pesanan</router-link>
    <router-link to="/detail-pesanan">Detail Pesanan</router-link>
     <router-link to="/tentang" exact-active-class="active">Tentang</router-link>

    

  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: px; /* Lebar sidebar */
  height: 100vh;
  background-color: #3e2723;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.brand {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

a {
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
  font-size: 18px;
}

.router-link-active,
.active {
  color: #ffcc80;
  font-weight: bold;
}
</style>
