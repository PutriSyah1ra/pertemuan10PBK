<template>
  <div class="thankyou-container">
    <div class="thankyou-card">
      <img
        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
        alt="Success Icon"
        class="icon"
      />
      <h2>Pembayaran Berhasil 🎉</h2>
      <p>Terima kasih telah berbelanja di toko skincare kami!</p>
      <router-link to="/product-list" class="back-link">← Kembali ke Produk</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThankYou'
};
</script>

<style scoped>
.thankyou-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: linear-gradient(to right, #fefcea, #f1da36);
}

.thankyou-card {
  background: #ffffff;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  animation: popIn 0.6s ease;
  max-width: 500px;
}

.icon {
  width: 80px;
  margin-bottom: 20px;
}

h2 {
  color: #2c3e50;
  margin-bottom: 15px;
}

p {
  color: #555;
  font-size: 16px;
  margin-bottom: 25px;
}

.back-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1abc9c;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
}

.back-link:hover {
  background-color: #16a085;
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
