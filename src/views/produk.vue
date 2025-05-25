<template>
  <div class="produk-container">
    <h1>🍫 Produk Coklat Unggulan</h1>
    <div class="produk-list">
      <div class="produk-card" v-for="item in produk" :key="item.id">
        <img :src="item.gambar" :alt="item.nama" loading="lazy" />
        <div class="produk-info">
          <h2>{{ item.nama }}</h2>
          <p>{{ item.deskripsi }}</p>
          <button class="btn" @click="bukaModal(item)">Lihat Detail</button>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div class="modal" v-if="produkDipilih">
      <div class="modal-content">
        <h2>{{ produkDipilih.nama }}</h2>
        <img :src="produkDipilih.gambar" :alt="produkDipilih.nama" class="modal-img" />
        <p><strong>Harga:</strong> Rp {{ produkDipilih.harga.toLocaleString('id-ID') }}</p>
        <p>{{ produkDipilih.deskripsi }}</p>
        <h3>Manfaat:</h3>
        <ul class="manfaat-list">
          <li v-for="(item, index) in produkDipilih.manfaat" :key="index">✔️ {{ item }}</li>
        </ul>
        <button class="btn-close" @click="produkDipilih = null">Tutup</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Produk',
  data() {
    return {
      produkDipilih: null,
      produk: [
        {
          id: 1,
          nama: 'Dark Chocolate 70%',
          deskripsi: 'Coklat hitam premium dengan rasa pahit khas dan antioksidan tinggi.',
          gambar: 'dark coklat.jpeg',
          harga: 35000,
          manfaat: [
            'Mengandung antioksidan tinggi',
            'Meningkatkan mood dan konsentrasi',
            'Menurunkan tekanan darah'
          ]
        },
        {
          id: 2,
          nama: 'Milk Chocolate Caramel',
          deskripsi: 'Coklat susu lembut berpadu dengan manisnya karamel lumer.',
          gambar: 'milk coklat caramel.jpg.jpeg',
          harga: 42000,
          manfaat: [
            'Memberi energi cepat',
            'Rasa manisnya membantu relaksasi',
            'Cocok sebagai camilan penambah semangat'
          ]
        },
        {
          id: 3,
          nama: 'Matcha White Chocolate',
          deskripsi: 'Coklat putih dengan rasa matcha khas Jepang yang unik dan nikmat.',
          gambar: 'matcha white coklat.jpeg',
          harga: 48000,
          manfaat: [
            'Mengandung antioksidan dari matcha',
            'Meningkatkan metabolisme tubuh',
            'Memberi sensasi tenang dan fokus'
          ]
        },
        {
          id: 4,
          nama: 'Hazelnut Chocolate',
          deskripsi: 'Diperkaya dengan potongan kacang hazelnut renyah di setiap gigitan.',
          gambar: 'hazelnut coklat.jpeg',
          harga: 39000,
          manfaat: [
            'Mengandung protein dan serat dari kacang',
            'Meningkatkan energi',
            'Baik untuk kesehatan jantung'
          ]
        }
      ]
    };
  },
  methods: {
    bukaModal(item) {
      this.produkDipilih = item;
    }
  }
};
</script>

<style scoped>
.produk-container {
  padding: 2rem 1rem;
  background-color: #fff8f0;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  text-align: center;
  color: #5d2e1a;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

.produk-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.produk-card {
  background: linear-gradient(145deg, #fff0e0, #ffe7d2);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.produk-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.produk-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #d2a679;
}

.produk-info {
  padding: 1rem;
  text-align: center;
}

.produk-card h2 {
  font-size: 1.3rem;
  color: #4e342e;
  margin: 0.5rem 0;
}

.produk-card p {
  font-size: 0.95rem;
  color: #6d4c41;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.5rem 1.2rem;
  background-color: #a0522d;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #6b3e26;
}

/* MODAL STYLES */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fffaf3;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.modal-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 1rem 0;
  border-radius: 8px;
}

.modal-content h2 {
  color: #4e342e;
  margin-bottom: 0.5rem;
}

.modal-content p {
  color: #5d4037;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.manfaat-list {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-top: 1rem;
}

.manfaat-list li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #5d4037;
}

.btn-close {
  padding: 0.5rem 1.2rem;
  background-color: #8d4f25;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1.5rem;
}

.btn-close:hover {
  background-color: #5c2e10;
}
</style>
