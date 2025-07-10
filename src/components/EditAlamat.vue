<template>
  <div class="edit-container" v-if="alamat">
    <h2>Edit Alamat</h2>
    <form @submit.prevent="simpanPerubahan">
      <label>Nama Penerima:</label>
      <input v-model="alamat.nama" type="text" required />

      <label>Nomor HP:</label>
      <input v-model="alamat.telepon" type="text" required />

      <label>Alamat Lengkap:</label>
      <textarea v-model="alamat.alamat" rows="4" required></textarea>

      <button type="submit">Simpan Perubahan</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditAlamat',
  data() {
    return {
      alamat: null
    };
  },
  mounted() {
    const id = this.$route.params.id;
    fetch(`http://localhost:3000/addresses/${id}`)
      .then(res => res.json())
      .then(data => {
        this.alamat = data;
      })
      .catch(err => {
        console.error('Gagal mengambil data alamat:', err);
        alert('Terjadi kesalahan saat mengambil data.');
      });
  },
  methods: {
    simpanPerubahan() {
      fetch(`http://localhost:3000/addresses/${this.alamat.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.alamat)
      })
        .then(() => {
          alert('Alamat berhasil diperbarui!');
          this.$router.push('/address-book');
        })
        .catch(err => {
          console.error('Gagal memperbarui alamat:', err);
          alert('Terjadi kesalahan saat memperbarui.');
        });
    }
  }
};
</script>

<style scoped>
.edit-container {
  max-width: 500px;
  margin: 50px auto;
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 16px;
  font-weight: bold;
  color: #34495e;
}

input,
textarea {
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  border-color: #1abc9c;
  outline: none;
}

button {
  margin-top: 25px;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
