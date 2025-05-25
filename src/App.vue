<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
}

/* Konten utama geser ke kanan sebesar lebar sidebar */
.main-content {
  margin-left: 220px;
  padding: 30px;
  flex: 1;
}
</style>
