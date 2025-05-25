<template>
  <div class="detail-container">
    <h1>Detail Pesanan</h1>
    <p><strong>Nama:</strong> {{ nama }}</p>
    <p><strong>No HP:</strong> {{ noHP }}</p>
    <p><strong>Alamat:</strong> {{ alamat }}</p>
    <p><strong>Metode Pembayaran:</strong> {{ metode }}</p>
    <p><strong>Total:</strong> {{ total | formatRupiah }}</p>

    <h2>🛒 Produk Dipesan:</h2>
    <ul>
      <li v-for="(item, index) in pesanan" :key="index">
        {{ item.nama }} - {{ item.harga | formatRupiah }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailPesanan',
  data() {
    return {
      pesanan: [],
      nama: this.$route.query.nama || '',
      noHP: this.$route.query.noHP || '',
      alamat: this.$route.query.alamat || '',
      metode: this.$route.query.metode || '',
      total: this.$route.query.total || 0
    };
  },
  created() {
    const pesananData = this.$route.query.pesanan;
    if (pesananData) {
      try {
        this.pesanan = JSON.parse(pesananData);
      } catch (e) {
        console.error('Gagal parsing pesanan:', e);
      }
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
.detail-container {
  max-width: 600px;
  margin: 2rem auto;
  background: #fff3e0;
  padding: 2rem;
  border-radius: 12px;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  color: #4e342e;
  margin-bottom: 1rem;
  text-align: center;
}

h2 {
  margin-top: 2rem;
  color: #6d4c41;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}
</style>
