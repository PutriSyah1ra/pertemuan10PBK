<template>
  <div class="address-container">
    <div class="frame-box">
      <h2>Daftar Riwayat Pembelian & Alamat</h2>

      <div v-if="riwayat.length === 0" class="empty-msg">
        Belum ada data transaksi tersimpan.
      </div>

      <div class="address-list">
        <div class="address-card" v-for="item in riwayat" :key="item.id">
          <!-- Alamat Pengiriman -->
          <div v-if="editId !== item.id">
            <p><strong>Nama:</strong> {{ item.alamat.nama }}</p>
            <p><strong>Telepon:</strong> {{ item.alamat.telepon }}</p>
            <p><strong>Alamat:</strong> {{ item.alamat.alamat }}</p>
            <div class="button-group">
              <button @click="startEdit(item)">✏️ Edit Alamat</button>
              <button class="delete-btn" @click="hapusRiwayat(item.id)">🗑️ Hapus</button>
            </div>
          </div>

          <!-- Edit Form -->
          <div v-else class="edit-form">
            <label>Nama:</label>
            <input v-model="editData.nama" type="text" />
            <label>Telepon:</label>
            <input v-model="editData.telepon" type="text" />
            <label>Alamat:</label>
            <textarea v-model="editData.alamat" />

            <div class="button-group">
              <button @click="simpanEdit(item.id)">💾 Simpan</button>
              <button class="cancel-btn" @click="cancelEdit">❌ Batal</button>
            </div>
          </div>

          <p><strong>Tanggal:</strong> {{ item.tanggal }}</p>
          <p><strong>Total Bayar:</strong> <span class="harga">Rp{{ item.total.toLocaleString() }}</span></p>

          <!-- Daftar Produk -->
          <div class="produk-list">
            <p><strong>Produk yang dibeli:</strong></p>
            <ul>
              <li v-for="produk in item.produk" :key="produk.id">
                {{ produk.nama }} - {{ produk.jumlah }}x (@Rp{{ produk.harga.toLocaleString() }})
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressBook',
  data() {
    return {
      riwayat: [],
      editId: null,
      editData: {
        nama: '',
        telepon: '',
        alamat: ''
      }
    };
  },
  mounted() {
    this.loadRiwayat();
  },
  methods: {
    loadRiwayat() {
      fetch('http://localhost:3000/riwayatDetail')
        .then(res => res.json())
        .then(data => {
          this.riwayat = data;
        })
        .catch(err => {
          console.error('Gagal memuat riwayat:', err);
        });
    },
    startEdit(item) {
      this.editId = item.id;
      this.editData = { ...item.alamat };
    },
    cancelEdit() {
      this.editId = null;
      this.editData = { nama: '', telepon: '', alamat: '' };
    },
    simpanEdit(id) {
      fetch(`http://localhost:3000/riwayatDetail/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          alamat: { ...this.editData }
        })
      })
        .then(() => {
          this.loadRiwayat();
          this.cancelEdit();
        })
        .catch(err => {
          console.error('Gagal mengedit:', err);
        });
    },
    hapusRiwayat(id) {
      if (confirm('Yakin ingin menghapus riwayat ini?')) {
        fetch(`http://localhost:3000/riwayatDetail/${id}`, {
          method: 'DELETE'
        })
          .then(() => {
            this.loadRiwayat();
          })
          .catch(err => {
            console.error('Gagal menghapus riwayat:', err);
          });
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.address-container {
  padding: 40px;
  max-width: 1100px;
  margin: auto;
  font-family: 'Poppins', sans-serif;
}

.frame-box {
  background: rgba(245, 235, 224, 0.8);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 8px 24px rgba(93, 64, 55, 0.15);
  margin-top: 80px;
}

h2 {
  color: #5d4037;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
}

.address-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.address-card {
  background-color: #efebe9;
  border: 2px solid #8d6e63;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(93, 64, 55, 0.1);
}

.edit-form label {
  display: block;
  margin-top: 10px;
  color: #5d4037;
  font-weight: 600;
}

.edit-form input,
.edit-form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #bcaaa4;
  border-radius: 6px;
  margin-top: 4px;
  font-family: 'Poppins', sans-serif;
}

textarea {
  resize: vertical;
}

.harga {
  color: #4e342e;
  font-weight: bold;
}

.produk-list {
  margin-top: 16px;
}

.produk-list ul {
  padding-left: 20px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0;
}

button {
  background: linear-gradient(to right, #8d6e63, #a1887f);
  color: white;
  border: none;
  padding: 8px 14px;
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

.delete-btn {
  background: linear-gradient(to right, #b71c1c, #7f0000);
}

.delete-btn:hover {
  background: linear-gradient(to right, #7f0000, #4e0000);
}

.cancel-btn {
  background: linear-gradient(to right, #757575, #616161);
}

.cancel-btn:hover {
  background: linear-gradient(to right, #424242, #212121);
}

.empty-msg {
  text-align: center;
  color: #888;
  font-style: italic;
  margin-bottom: 30px;
}
</style>
