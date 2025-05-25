<template>
  <section class="order">
    <h2>Pesan Coklat Sekarang</h2>
    <form @submit.prevent="submitPesanan">
      <input v-model="nama" type="text" placeholder="Nama Anda" required />
      <select v-model="pilihanMenu" required>
        <option disabled value="">Pilih Produk</option>
        <option>Dark Chocolate</option>
        <option>Milk Chocolate</option>
        <option>White Chocolate</option>
        <option>Matcha Chocolate</option>
      </select>
      <input v-model.number="jumlah" type="number" placeholder="Jumlah" min="1" required />
      <button type="submit">Pesan</button>
    </form>
    <div v-if="pesanBerhasil" class="success-message">
      ✅ Terima kasih, pesanan Anda sudah dicatat!
    </div>
  </section>
</template>

<script>
export default {
  name: 'FormPemesanan',
  data() {
    return {
      nama: '',
      pilihanMenu: '',
      jumlah: 1,
      pesanBerhasil: false
    }
  },
  methods: {
    submitPesanan() {
      this.pesanBerhasil = true;
      setTimeout(() => {
        this.nama = '';
        this.pilihanMenu = '';
        this.jumlah = 1;
        this.pesanBerhasil = false;
      }, 4000);
    }
  }
}
</script>

<style scoped>
.order {
  max-width: 600px;
  margin: 3rem auto;
  background-color: #fff8f2;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.order h2 {
  color: #4b2e2e;
  margin-bottom: 1rem;
}
.order form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.order input,
.order select {
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.order button {
  padding: 0.8rem;
  font-size: 1rem;
  background-color: #6b3e26;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.order button:hover {
  background-color: #532d1f;
}
.success-message {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
}
</style>
