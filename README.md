# 🍫 Aplikasi Penjualan Coklat Online - Vue 3 + Vite + Pinia

Aplikasi ini adalah simulasi **penjualan coklat online** berbasis **Vue 3** yang menggunakan:
- **Pinia** untuk manajemen state
- **json-server** sebagai backend API palsu (mock API)
- **Vue Router** untuk navigasi halaman
- **Axios** untuk komunikasi HTTP

---

## 🛠 Teknologi yang Digunakan

- Vue 3
- Vite
- Pinia
- Vue Router
- Axios
- Vitest
- json-server

---

## 🔄 Siklus / Alur Aplikasi

1. Halaman utama → Tampilkan produk
2. Tambah ke keranjang → Simpan di Pinia
3. Checkout → Isi alamat
4. Klik bayar → Simpan ke json-server
5. Halaman “Thank You” & Riwayat

---

## 📁 Ringkasan Komponen Vue

| Komponen         | Fungsi Singkat                                                                 |
|------------------|--------------------------------------------------------------------------------|
| **Login.vue**     | Form login user dan simpan data ke localStorage                               |
| **Dashboard.vue** | Menampilkan halaman utama setelah login, berisi sambutan dan link fitur       |
| **ProdukCoklat.vue** | Menampilkan daftar produk coklat dari backend, tombol "Beli Sekarang"        |
| **Checkout.vue**  | Menampilkan isi keranjang dan total harga, lanjut ke input alamat             |
| **AddressBook.vue** | Form pengisian alamat (nama, telepon, alamat), kirim ke server via Axios     |
| **ThankYou.vue**  | Halaman ucapan terima kasih setelah transaksi selesai                          |
| **EditAlamat.vue** | Edit data alamat yang telah disimpan di server                                |
| **About.vue**     | Menampilkan informasi tentang aplikasi atau tim pengembang                     |

---

## 📦 Store: `menuStore.js`

Store ini digunakan untuk mengelola data menu dari `json-server` menggunakan Pinia dan Axios (CRUD lengkap).

### 🧠 State

```js
state: () => ({ 
  menu: [] 
})
