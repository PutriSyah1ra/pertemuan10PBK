<template>
  <div class="home">
    <!-- Hero Section -->
    <div class="hero">
      <div class="overlay">
        <div class="hero-text">
          <h1>Selamat Datang di <span class="highlight">Ada Coklat</span>!</h1>
          <p>
            Temukan beragam coklat lezat dan premium — sempurna untuk setiap momen spesialmu.
          </p>
          <router-link to="/pesanan" class="cta-button">Belanja Sekarang</router-link>
        </div>
      </div>
    </div>

    <!-- Why Us -->
    <section class="features">
      <h2>Kenapa Memilih Kami?</h2>
      <ul>
        <li>🍫 <strong>Coklat asli berkualitas tinggi</strong></li>
        <li>🚚 <strong>Pengiriman cepat dan aman</strong></li>
        <li>💝 <strong>Cocok untuk hadiah istimewa</strong></li>
      </ul>
    </section>

    <!-- Produk Unggulan -->
    <section class="produk-unggulan">
      <h2>✨ Produk Unggulan</h2>
      <div class="produk-grid">
        <div class="produk-card" v-for="produk in produkUnggulan" :key="produk.id">
          <img :src="produk.gambar" :alt="produk.nama" />
          <h3>{{ produk.nama }}</h3>
          <p>{{ produk.harga | formatRupiah }}</p>
        </div>
      </div>
    </section>

    <!-- Testimoni -->
    <section class="testimoni">
      <h2>🗣️ Apa Kata Mereka?</h2>
      <div class="testi-list">
        <div class="testi-card" v-for="t in testimoni" :key="t.nama">
          <p>“{{ t.pesan }}”</p>
          <strong>- {{ t.nama }}</strong>
        </div>
      </div>
    </section>

    <!-- CTA Akhir -->
    <section class="call-to-action">
      <h2>Yuk, manjakan dirimu dengan coklat premium dari ADA COKLAT!</h2>
      <router-link to="/pesanan" class="cta-button">Pesan Sekarang 🍫</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      produkUnggulan: [
        { id: 1, nama: "Dark Chocolate 70%", harga: 35000, gambar: "dark coklat.jpeg" },
        { id: 2, nama: "Milk Chocolate Caramel", harga: 42000, gambar: "milk coklat caramel.jpg.jpeg" },
        { id: 3, nama: "Matcha White Chocolate", harga: 48000, gambar: "matcha white coklat.jpeg" }
      ],
      testimoni: [
        { nama: "Ayu", pesan: "Coklatnya enak banget, cocok buat hadiah!" },
        { nama: "Rafi", pesan: "Pengiriman cepat, kemasan aman dan elegan!" },
        { nama: "Lina", pesan: "Rasa premium-nya berasa, bakal order lagi!" }
      ]
    };
  },
  filters: {
    formatRupiah(value) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      }).format(value);
    }
  }
};
</script>

<style scoped>
.home {
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff8f0;
}

/* Hero */
.hero {
  background-image: url('https://images.unsplash.com/photo-1612197749869-77e7d195a414?auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  padding: 5rem 1rem;
  margin-bottom: 3rem;
  position: relative;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.overlay {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(68, 38, 38, 0.8));
  padding: 3rem 2rem;
  border-radius: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.hero-text h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.hero-text .highlight {
  color: #ffcc80;
}

.hero-text p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #a0522d;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #6b3e26;
}

/* Features */
.features {
  text-align: center;
  margin-bottom: 3rem;
}

.features h2 {
  font-size: 2rem;
  color: #4b2e2e;
  margin-bottom: 1.5rem;
}

.features ul {
  list-style: none;
  padding: 0;
  font-size: 1.2rem;
  color: #5a3d2b;
}

.features li {
  margin-bottom: 0.8rem;
}

/* Produk Unggulan */
.produk-unggulan {
  margin: 3rem 0;
  text-align: center;
}

.produk-unggulan h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #4e342e;
}

.produk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.produk-card {
  background-color: #fff3e0;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.2s;
}

.produk-card:hover {
  transform: translateY(-5px);
}

.produk-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.8rem;
}

/* Testimoni */
.testimoni {
  margin-top: 4rem;
  text-align: center;
}

.testimoni h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #5d4037;
}

.testi-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.testi-card {
  background-color: #efebe9;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  max-width: 300px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* CTA Akhir */
.call-to-action {
  margin-top: 4rem;
  padding: 2rem 1rem;
  text-align: center;
  background-color: #ffe0b2;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.call-to-action h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #4e342e;
}
</style>
