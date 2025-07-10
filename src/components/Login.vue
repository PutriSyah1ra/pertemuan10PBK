<template>
  <div class="login-container fade-in">
    <h2>Masuk ke Chocolate</h2>
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />

    <div class="checkbox-wrapper">
      <label class="custom-checkbox">
        <input type="checkbox" v-model="ingatSaya" />
        <span class="checkmark"></span>
        Ingat saya
      </label>
    </div>

    <button @click="handleLogin">✨ Login Sekarang</button>
  </div>
</template>

<script>
import { useUserStore } from '../stores/user';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      ingatSaya: false
    };
  },
  methods: {
    handleLogin() {
      const userStore = useUserStore();
      userStore.setUsername(this.username);
      if (this.ingatSaya) {
        localStorage.setItem('skincare-username', this.username);
      }
      this.$router.push('/dashboard');
    }
  },
  mounted() {
    const saved = localStorage.getItem('skincare-username');
    if (saved) {
      this.username = saved;
      this.ingatSaya = true;
    }
  }
};
</script>

<style scoped>
:deep(body) {
  margin: 0;
  padding: 0;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1VJ9d__ipOd9cOAMTwItCeoCGx76QkOrZkA&s') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.login-container {
  max-width: 420px;
  margin: 120px auto;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.85); /* Opacity untuk background */
  border-radius: 18px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  text-align: center;
  border: 2px solid #3e2723; /* Border warna coklat tua */
}

h2 {
  color: #3e2723; /* Warna coklat tua */
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 14px;
  margin: 12px 0;
  border: 1.6px solid #795548; /* Border coklat */
  border-radius: 10px;
  font-size: 16px;
  background-color: #f5f5f5; /* Background coklat muda */
  transition: border 0.3s ease;
}

input:focus {
  border-color: #3e2723; /* Coklat tua saat focus */
  outline: none;
  box-shadow: 0 0 0 3px rgba(62, 39, 35, 0.15); /* Coklat saat focus */
}

.checkbox-wrapper {
  display: flex;
  justify-content: flex-start;
  margin: 16px 0 24px;
}

.custom-checkbox {
  position: relative;
  padding-left: 30px;
  font-size: 14px;
  color: #3e2723; /* Coklat tua */
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  left: 0;
  top: 1px;
  height: 18px;
  width: 18px;
  background-color: #d7ccc8; /* Warna coklat muda */
  border-radius: 4px;
  border: 1px solid #a1887f; /* Border coklat muda */
  transition: background 0.2s;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #6d4c41; /* Coklat sedang */
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(to right, #6d4c41, #3e2723); /* Coklat gradasi */
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

button:hover {
  background: linear-gradient(to right, #3e2723, #6d4c41); /* Coklat gradasi terbalik */
  transform: translateY(-2px);
}
</style>
