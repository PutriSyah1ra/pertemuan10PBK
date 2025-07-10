<template>
  <div class="checkout-container">
    <h2 class="form-title">🛍️ Checkout Produk Coklat</h2>

    <!-- Ringkasan Produk -->
    <div class="product-summary" v-if="produk">
      <img :src="produk.gambar" alt="produk" />
      <div class="info">
        <h3>{{ produk.nama }}</h3>
        <p>{{ produk.deskripsi }}</p>
        <p class="harga">Harga: Rp {{ produk.harga.toLocaleString('id-ID') }}</p>
      </div>
    </div>

    <!-- Form Alamat -->
    <form @submit.prevent="submitAlamat">
      <label>Nama Penerima:</label>
      <input v-model="nama" type="text" required />

      <label>Nomor Telepon:</label>
      <input v-model="telepon" type="text" required />

      <label>Alamat Lengkap:</label>
      <textarea v-model="alamat" required></textarea>

      <button type="submit">Bayar Sekarang</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {
      produk: null,
      nama: '',
      telepon: '',
      alamat: ''
    };
  },
  mounted() {
    const item = localStorage.getItem('checkoutItem');
    if (item) {
      this.produk = JSON.parse(item);
    }
  },
  methods: {
    submitAlamat() {
  const tanggalSekarang = new Date().toLocaleString('id-ID');
  const totalHarga = this.produk ? this.produk.harga : 0;

  const alamatData = {
    nama: this.nama,
    telepon: this.telepon,
    alamat: this.alamat,
    produk: this.produk
  };

  // Kirim data ke alamat
  fetch('http://localhost:3000/addresses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(alamatData)
  });

  // Kirim data lengkap ke riwayatDetail
  const riwayatData = {
    alamat: {
      nama: this.nama,
      telepon: this.telepon,
      alamat: this.alamat
    },
    produk: [
      {
        id: this.produk.id,
        nama: this.produk.nama,
        harga: this.produk.harga,
        jumlah: 1
      }
    ],
    total: totalHarga,
    tanggal: tanggalSekarang
  };

  fetch('http://localhost:3000/riwayatDetail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(riwayatData)
  })
    .then(() => {
      localStorage.removeItem('checkoutItem');
      alert('✅ Pembayaran berhasil & data riwayat tersimpan!');
      this.$router.push('/thank-you'); // Ganti sesuai dengan rute halaman Thank You
    })
    .catch(err => {
      console.error('❌ Gagal menyimpan riwayat:', err);
      alert('Terjadi kesalahan saat menyimpan data riwayat.');
    });
}
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.checkout-container {
  max-width: 600px;
  margin: 60px auto;
  background: #fffaf3;
  padding: 35px 40px;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(233, 30, 99, 0.1);
  font-family: 'Poppins', sans-serif;
  animation: fadeIn 0.8s ease;
}
.form-title {
  text-align: center;
  margin-bottom: 30px;
  color: #d63384;
  font-size: 26px;
  font-weight: 700;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 16px;
  font-weight: 600;
  color: #8e44ad;
}
input,
textarea {
  padding: 10px;
  margin-top: 6px;
  border-radius: 10px;
  border: 2px solid #ec69a4;
  background-color: #ffeaf3;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
}
textarea {
  resize: vertical;
  min-height: 80px;
}
input:focus,
textarea:focus {
  border-color: #e91e63;
  outline: none;
  box-shadow: 0 0 8px rgba(233, 30, 99, 0.2);
}
button {
  margin-top: 30px;
  padding: 12px;
  background: linear-gradient(to right, #ec407a, #d63384);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}
button:hover {
  background: linear-gradient(to right, #c2185b, #ad1457);
}

/* Produk Summary */
.product-summary {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 30px;
}
.product-summary img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(233, 30, 99, 0.1);
}
.product-summary .info {
  flex: 1;
}
.product-summary h3 {
  font-size: 18px;
  color: #d63384;
  margin-bottom: 5px;
}
.product-summary p {
  font-size: 14px;
  color: #6c3483;
  margin-bottom: 6px;
}
.product-summary .harga {
  font-weight: bold;
  color: #16a085;
  margin-top: 5px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
