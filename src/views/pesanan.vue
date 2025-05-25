<template>
  <div class="pesanan-container">
    <h1>🍫 Pesan Coklat Favoritmu</h1>

    <div class="produk-grid">
      <div class="produk-item" v-for="item in produk" :key="item.id">
        <img :src="item.gambar" :alt="item.nama" />
        <h2>{{ item.nama }}</h2>
        <p class="harga">{{ item.harga | formatRupiah }}</p>
        <button @click="tambahKePesan(item)">➕ Tambah ke Pesan</button>
      </div>
    </div>

    <div class="pesan" v-if="keranjang.length">
      <h2>🛒 Daftar Pesanan</h2>
      <ul>
        <li v-for="(item, index) in keranjang" :key="index">
          <span>{{ item.nama }} - {{ item.harga | formatRupiah }}</span>
          <button class="hapus-btn" @click="hapusItem(index)">❌</button>
        </li>
      </ul>
      <p class="total"><strong>Total:</strong> {{ totalHarga | formatRupiah }}</p>

      <div class="form-group">
        <label>👤 Nama Pembeli:</label>
        <input v-model="namaPembeli" type="text" placeholder="Masukkan nama" />

        <label>📱 No HP:</label>
        <input v-model="noHP" type="text" placeholder="08xxxxxxxxxx" />

        <label>🏠 Alamat:</label>
        <input v-model="alamat" type="text" placeholder="Masukkan alamat lengkap" />

        <label>💳 Metode Pembayaran:</label>
        <select v-model="metodePembayaran">
          <option value="Transfer Bank">Transfer Bank</option>
          <option value="COD">COD</option>
          <option value="E-wallet">E-wallet</option>
        </select>
      </div>

      <button class="checkout-btn" @click="checkout">🧾 Checkout Sekarang</button>
    </div>

    <div class="konfirmasi" v-if="pesananTerkonfirmasi">
      <h3>✅ Pesanan Anda telah dikonfirmasi!</h3>
      <p>Terima kasih telah berbelanja di <strong>Toko Coklat</strong>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pesanan",
  data() {
    return {
      produk: [
        { id: 1, nama: "Dark Chocolate 70%", harga: 35000, gambar: 'dark coklat.jpeg' },
        { id: 2, nama: "Milk Chocolate Caramel", harga: 42000, gambar: 'milk coklat caramel.jpg.jpeg' },
        { id: 3, nama: "Matcha White Chocolate", harga: 48000, gambar: 'matcha white coklat.jpeg' },
        { id: 4, nama: "Hazelnut Chocolate", harga: 39000, gambar: 'hazelnut coklat.jpeg' }
      ],
      keranjang: [],
      pesananTerkonfirmasi: false,
      namaPembeli: '',
      noHP: '',
      alamat: '',
      metodePembayaran: 'Transfer Bank'
    };
  },
  computed: {
    totalHarga() {
      return this.keranjang.reduce((total, item) => total + item.harga, 0);
    }
  },
  methods: {
    tambahKePesan(item) {
      this.keranjang.push(item);
      this.pesananTerkonfirmasi = false;
    },
    hapusItem(index) {
      this.keranjang.splice(index, 1);
    },
    checkout() {
      if (!this.namaPembeli || !this.noHP || !this.alamat) {
        alert('Mohon lengkapi semua data pembeli.');
        return;
      }
      this.$router.push({
        name: 'DetailPesanan',
        query: {
          pesanan: JSON.stringify(this.keranjang),
          nama: this.namaPembeli,
          noHP: this.noHP,
          alamat: this.alamat,
          metode: this.metodePembayaran,
          total: this.totalHarga
        }
      });
    }
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
.pesanan-container {
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background: #fff8f2;
  color: #4e342e;
}

h1 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #6d4c41;
  font-weight: bold;
}

.produk-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.produk-item {
  background-color: #fcefe6;
  border-radius: 14px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.produk-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 18px rgba(0,0,0,0.12);
}

.produk-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.produk-item h2 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.harga {
  color: #795548;
  font-weight: bold;
}

.produk-item button {
  background-color: #8d6e63;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.produk-item button:hover {
  background-color: #6d4c41;
}

.pesan {
  margin-top: 3rem;
  background: #fff3e0;
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.08);
}

.pesan h2 {
  margin-bottom: 1rem;
  color: #5d4037;
}

.pesan ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.pesan li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
  font-size: 1rem;
}

.hapus-btn {
  background-color: #ef5350;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
}

.total {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
}

.form-group {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
}

.form-group label {
  font-weight: 600;
}

.form-group input,
.form-group select {
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #fff;
}

.checkout-btn {
  margin-top: 1.5rem;
  background-color: #6d4c41;
  color: white;
  font-weight: bold;
  padding: 0.8rem 1.2rem;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background-color: #4e342e;
}

.konfirmasi {
  margin-top: 2rem;
  background-color: #dcedc8;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  color: #33691e;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
