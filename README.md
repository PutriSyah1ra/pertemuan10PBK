# 🍫 Aplikasi Penjualan Coklat Online - Vue 3 + Vite + Pinia

Aplikasi ini adalah simulasi **penjualan coklat online** berbasis **Vue 3** yang menggunakan:
- **Pinia** untuk manajemen state
- **json-server** sebagai backend API palsu (mock API)
- **Vue Router** untuk navigasi halaman
- **Axios** untuk komunikasi HTTP
- **Vitest** untuk unit testing

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

| Komponen           | Fungsi Singkat                                                                |
|--------------------|-------------------------------------------------------------------------------|
| **Login.vue**       | Form login user dan simpan data ke localStorage                              |
| **Dashboard.vue**   | Menampilkan halaman utama setelah login, berisi sambutan dan navigasi        |
| **ProdukCoklat.vue**| Menampilkan daftar produk dari backend, tombol "Beli Sekarang"               |
| **Checkout.vue**    | Menampilkan isi keranjang dan total harga, lanjut ke pengisian alamat        |
| **AddressBook.vue** | Form pengisian alamat (nama, telepon, alamat), kirim ke server               |
| **ThankYou.vue**    | Halaman ucapan terima kasih setelah transaksi selesai                        |
| **EditAlamat.vue**  | Edit data alamat yang sudah disimpan di server                               |
| **About.vue**       | Menampilkan informasi tentang aplikasi atau tim pembuat                      |

---

## 🧪 Pengujian Checkout dengan Vitest

Pengujian dilakukan terhadap komponen `Checkout.vue` menggunakan **Vitest** dan **@vue/test-utils**.

### ✅ Yang Diuji:

#### 1. **Render Form**

- Memastikan elemen input dan textarea muncul di halaman:
  - Nama Penerima (`input[type="text"]`)
  - Nomor Telepon
  - Alamat Lengkap (`textarea`)

#### 2. **Submit Form dan Navigasi**

- Mock data produk (`produk`)
- Simulasi isi form:
  - Nama: `Dina`
  - No. Telepon: `0812345678`
  - Alamat: `Jl. Melati No. 5`
- Setelah submit:
  - `fetch()` dipanggil
  - Navigasi ke halaman `/riwayat` berhasil (`router.push('/riwayat')`)

### 🧪 Cuplikan Kode Test

```js
// Simulasi pengisian form
await wrapper.find('input[type="text"]').setValue('Dina')
await wrapper.findAll('input[type="text"]')[1].setValue('0812345678')
await wrapper.find('textarea').setValue('Jl. Melati No. 5')

// Submit form dan validasi
await wrapper.find('form').trigger('submit.prevent')
await flushPromises()
expect(fetch).toHaveBeenCalled()
expect(push).toHaveBeenCalledWith('/riwayat')
