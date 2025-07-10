<template>
  <div class="about-container fade-in">
    <h2>Ada Coklat</h2>
    <p>
      Toko Coklat Kami berdiri sejak tahun 2020 dan berkomitmen untuk menyajikan coklat premium
      dengan kualitas terbaik. Kami percaya bahwa coklat bukan hanya makanan penutup,
      tetapi juga simbol kebahagiaan dan cinta.
    </p>

    <h3>🍫 Keunggulan Produk Kami</h3>
    <ul>
      <li>Bahan baku pilihan dari biji kakao terbaik di Indonesia dan Belgia</li>
      <li>Tanpa pengawet dan 100% alami</li>
      <li>Beragam rasa: dark, milk, white, dan infused</li>
      <li>Kemasan ramah lingkungan dan eksklusif</li>
    </ul>

    <h3>🌟 Varian Produk Populer</h3>
    <ol>
      <li><strong>Dark Chocolate 70%</strong> — Pahit nikmat dengan manfaat antioksidan tinggi</li>
      <li><strong>Milk Chocolate Caramel</strong> — Manis lembut berpadu dengan karamel cair</li>
      <li><strong>Matcha White Chocolate</strong> — Kombinasi unik rasa matcha dan coklat putih</li>
      <li><strong>Hazelnut Coklat</strong> — Potongan kacang hazelnut renyah di setiap gigitan</li>
    </ol>

    <h3>🎯 Misi Kami</h3>
    <p>
      Kami ingin membawa senyum ke setiap pelanggan melalui cita rasa coklat yang memanjakan lidah.
      Kami juga memberdayakan petani kakao lokal melalui kemitraan yang adil dan berkelanjutan.
    </p>

    <h3>📞 Kontak Kami</h3>
    <p>
      📍 <strong>Alamat:</strong> Jl. Coklat Manis No. 7, Bukittinggi<br>
      📱 <strong>Telepon:</strong> 0812-3456-7890<br>
      💬 <strong>WhatsApp:</strong>
      <a href="https://wa.me/6281234567890" target="_blank">Chat via WhatsApp</a><br>
      📧 <strong>Email:</strong> info@tokocoklat.com<br>
      📸 <strong>Instagram:</strong>
      <a href="https://instagram.com/adacoklat" target="_blank">@adacoklat</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Tentang'
}
</script>

<style scoped>
/* === ANIMASI MASUK === */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

/* === KONTAINER UTAMA === */
.about-container {
  max-width: 720px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.95);
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border: 2px solid #fcd9ce;
  backdrop-filter: blur(3px);
  font-family: 'Segoe UI', sans-serif;
}

/* === JUDUL UTAMA === */
h2 {
  color: #a0522d;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}

/* === SUBJUDUL === */
h3 {
  color: #6b3e26;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 12px;
}

/* === PARAGRAF === */
p {
  margin-top: 10px;
  color: #555;
  font-size: 16px;
  line-height: 1.6;
}

/* === DAFTAR === */
ul, ol {
  text-align: left;
  margin-left: 1.5rem;
  color: #444;
  font-size: 15px;
  line-height: 1.6;
}

ul {
  list-style-type: '🍫 ';
}

ol {
  list-style-type: decimal;
}

/* === LINK KONTAK === */
a {
  color: #a0522d;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
  color: #6b3e26;
}
</style>
