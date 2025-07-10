<template>
  <div class="product-container">
    <h2>🍫 Produk Coklat Unggulan</h2>

    <div class="product-grid">
      <div class="product-card" v-for="item in produk" :key="item.id">
        <img :src="item.gambar" :alt="item.nama" />
        <h3>{{ item.nama }}</h3>
        <p class="harga">Rp {{ item.harga.toLocaleString('id-ID') }}</p>
        <div class="button-group">
          <button @click="bukaModal(item)">🍫 Lihat Detail</button>
          <button class="checkout-btn" @click="pesanSekarang(item)">🛒 Pesan Sekarang</button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal" v-if="produkDipilih">
      <div class="modal-content">
        <h2>{{ produkDipilih.nama }}</h2>
        <img :src="produkDipilih.gambar" :alt="produkDipilih.nama" class="modal-img" />
        <p><strong>Harga:</strong> Rp {{ produkDipilih.harga.toLocaleString('id-ID') }}</p>
        <p>{{ produkDipilih.deskripsi }}</p>
        <h3>Manfaat:</h3>
        <ul class="manfaat-list">
          <li v-for="(m, i) in produkDipilih.manfaat" :key="i">✔️ {{ m }}</li>
        </ul>
        <button class="btn-close" @click="produkDipilih = null">Tutup</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdukCoklat',
  data() {
    return {
      produkDipilih: null,
      produk: [
        {
          id: 1,
          nama: 'Dark Chocolate 70%',
          deskripsi: 'Coklat hitam premium dengan rasa pahit khas dan antioksidan tinggi.',
          gambar: 'https://images.tokopedia.net/img/cache/700/product-1/2016/12/17/363/363_a17e0a6f-e97b-4a96-a728-943f000d7f1f_450_450.png',
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
          gambar: 'https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dwacd1cf5d/images/hi-res/PhotoE-240501_HC_0336_HersheyCaramelBar_VIS-1SIMP.jpeg?sw=700&sh=700&sm=fit',
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
          gambar: 'https://dessertswithbenefits.com/wp-content/uploads/2018/03/Healthy-Matcha-Green-Tea-White-Chocolate.jpg',
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
          gambar: 'https://image.astronauts.cloud/product-images/2025/5/cadburyhazelnut57_2e009b8f-c534-4dc9-b12c-66617147feda_900x900.jpg',
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
    },
    pesanSekarang(item) {
      // Simulasi kirim produk ke checkout (nanti bisa integrasi Pinia atau localStorage)
      localStorage.setItem('checkoutItem', JSON.stringify(item));
      this.$router.push('/checkout');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.product-container {
  padding: 40px;
  max-width: 1100px;
  margin: auto;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

h2 {
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 700;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  background-color: #efebe9; /* coklat muda */
  border: 2px solid #8d6e63;
  border-radius: 16px;
  padding: 20px;
  width: 260px;
  box-shadow: 0 8px 18px rgba(93, 64, 55, 0.15); /* shadow natural */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(93, 64, 55, 0.2);
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(93, 64, 55, 0.15);
}

.product-card h3 {
  margin: 15px 0 8px;
  color: #4e342e;
  font-size: 18px;
  font-weight: 600;
}

.harga {
  color: #6d4c41;
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 15px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

/* Tombol umum */
button {
  background: linear-gradient(to right, #8d6e63, #a1887f); /* coklat gradasi */
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

button:hover {
  background: linear-gradient(to right, #6d4c41, #5d4037);
}

/* Tombol checkout (lebih tegas) */
.checkout-btn {
  background: linear-gradient(to right, #5d4037, #3e2723);
}

.checkout-btn:hover {
  background: linear-gradient(to right, #3e2723, #1b1311);
}

/* Modal */
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
  background-color: #fbe9e7; /* coklat paling muda */
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

.manfaat-list {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-top: 1rem;
}

.manfaat-list li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #4e342e;
}

.btn-close {
  margin-top: 1.5rem;
  padding: 0.5rem 1.2rem;
  background-color: #5d4037;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
}

.btn-close:hover {
  background-color: #3e2723;
}

</style>
