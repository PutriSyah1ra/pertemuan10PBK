<template>
  <div class="dashboard">
    <div class="welcome-box">
      <!-- Gambar dari URL eksternal -->
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/029/753/176/small_2x/chocolate-typography-handwritten-calligraphy-logo-design-on-white-background-illustration-vector.jpg"
        alt="Coklat"
        class="dashboard-image"
      />
      <h2 class="fade-in">Selamat Datang di Dashboard</h2>
      <p class="fade-in-delay">
        Silakan pilih menu di navigasi untuk melakukan booking atau cek status.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  animation: fadeBg 2s ease-in-out;
}

/* Welcome Box */
.welcome-box {
  background: rgba(255, 255, 255, 0.08);
  padding: 24px 32px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  text-align: center;
  animation: popIn 0.6s ease-out;
  max-width: 420px;
  margin-top: 100px;
}

/* Gambar */
.dashboard-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 24px;
  animation: fadeInImage 1s ease-out forwards;
  opacity: 0;
  border-radius: 12px;
}

/* Judul dengan warna putih */
h2 {
  font-size: 24px;
  color: #ffffff; /* putih */
  margin-bottom: 14px;
}

/* Paragraf juga warna putih */
p {
  font-size: 16px;
  color: #ffffff; /* putih */
}

/* Animasi */
@keyframes fadeBg {
  from {
    background-color: #f7f9fa;
  }
  to {
    background: transparent;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0.85);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeInText 1s ease forwards;
}

.fade-in-delay {
  opacity: 0;
  animation: fadeInText 1.5s ease forwards;
}

@keyframes fadeInText {
  to {
    opacity: 1;
  }
}

@keyframes fadeInImage {
  to {
    opacity: 1;
  }
}
</style>
