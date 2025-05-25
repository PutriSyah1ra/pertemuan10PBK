<template>
  <div class="tentang-container">
    <div class="intro-box">
      <h1>Tentang Ada Coklat </h1>
      <p>
        Toko Coklat Kami berdiri sejak tahun 2020 dan berkomitmen untuk menyajikan coklat premium
        dengan kualitas terbaik. Kami percaya bahwa coklat bukan hanya makanan penutup,
        tetapi juga simbol kebahagiaan dan cinta.
      </p>
    </div>

    <div class="section">
      <h2>🍫 Keunggulan Produk Kami</h2>
      <ul>
        <li>Bahan baku pilihan dari biji kakao terbaik di Indonesia dan Belgia</li>
        <li>Tanpa pengawet dan 100% alami</li>
        <li>Tersedia dalam berbagai varian rasa: dark, milk, white, dan infused</li>
        <li>Dikemas dengan ramah lingkungan dan eksklusif</li>
      </ul>
    </div>

    <div class="section">
      <h2>🌟 Varian Produk Populer</h2>
      <ol>
        <li><strong>Dark Chocolate 70%</strong> — Pahit nikmat dengan manfaat antioksidan tinggi</li>
        <li><strong>Milk Chocolate Caramel</strong> — Manis lembut berpadu dengan karamel cair</li>
        <li><strong>Matcha White Chocolate</strong> — Kombinasi unik rasa matcha dan coklat putih</li>
        <li><strong>Hazelnut Coklat</strong> — Diperkaya dengan potongan kacang hazelnut renyah di setiap gigitan.</li>
      </ol>
    </div>

    <div class="section">
      <h2>🎯 Misi Kami</h2>
      <p>
        Kami ingin membawa senyum ke setiap pelanggan melalui cita rasa coklat yang memanjakan lidah.
        Selain itu, kami juga memberdayakan petani kakao lokal melalui kemitraan yang adil dan berkelanjutan.
      </p>
    </div>

    <div class="section kontak">
      <h2>📞 Kontak Kami</h2>
      <p>
        📍 <strong>Alamat:</strong> Jl. Coklat Manis No. 7, Bukittinggi, Indonesia<br>
        📱 <strong>Telepon:</strong> 0812-3456-7890<br>
        💬 <strong>WhatsApp:</strong> 
        <a href="https://wa.me/6281234567890" target="_blank">Chat via WhatsApp</a><br>
        📧 <strong>Email:</strong> info@tokocoklat.com<br>
        📸 <strong>Instagram:</strong> 
        <a href="https://instagram.com/adacoklat" target="_blank">@adacoklat</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tentang'
}
</script>

<style scoped>
.tentang-container {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  background-color: #fff8f0;
  font-family: 'Segoe UI', sans-serif;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.intro-box {
  background: linear-gradient(135deg, #ffe0b2, #fff3e0);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: inset 0 0 10px rgba(255, 204, 153, 0.3);
}

h1 {
  color: #6b3e26;
  font-size: 2.4rem;
  margin-bottom: 1rem;
  text-align: center;
}

h2 {
  color: #4e342e;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
}

p {
  color: #5d4037;
  line-height: 1.7;
  font-size: 1rem;
}

ul, ol {
  margin-left: 1rem;
  padding-left: 1rem;
  color: #5d4037;
  line-height: 1.6;
  font-size: 1rem;
}

ul {
  list-style-type: '🍫 ';
}

ol {
  list-style-type: decimal;
}

.kontak p {
  background-color: #fff3e0;
  padding: 1rem;
  border-radius: 10px;
  line-height: 1.8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.kontak a {
  color: #a0522d;
  text-decoration: none;
  font-weight: bold;
}

.kontak a:hover {
  text-decoration: underline;
  color: #6b3e26;
}
</style>
