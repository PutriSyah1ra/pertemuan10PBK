import { mount, flushPromises } from '@vue/test-utils';
import Checkout from '../components/Checkout.vue';
import { describe, it, expect, vi } from 'vitest';

describe('Checkout.vue', () => {
  it('renders input alamat', () => {
    const wrapper = mount(Checkout);
    
    // Memastikan input dan textarea ada di dalam form
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);  // Nama Penerima
    expect(wrapper.findAll('input[type="text"]').at(1).exists()).toBe(true);  // Nomor Telepon
    expect(wrapper.find('textarea').exists()).toBe(true);  // Alamat Lengkap
  });

  it('submits form and navigates to /riwayat', async () => {
    const push = vi.fn();

    // Mock global fetch API
    global.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({}) })
    );

    // Mock produk yang akan dikirimkan
    const mockProduk = {
      id: 1,
      nama: 'Dark Chocolate 70%',
      deskripsi: 'Coklat hitam premium dengan rasa pahit khas dan antioksidan tinggi.',
      gambar: 'https://images.unsplash.com/photo-1589712235271-60ae5fd83b32',
      harga: 35000,
      manfaat: [
        'Mengandung antioksidan tinggi',
        'Meningkatkan mood dan konsentrasi',
        'Menurunkan tekanan darah'
      ]
    };

    const wrapper = mount(Checkout, {
      global: {
        mocks: {
          $router: { push }
        }
      }
    });

    // Mengatur produk yang telah dimock agar tersedia pada saat komponen dimuat
    wrapper.vm.produk = mockProduk;
    
    // Mengisi form dengan nilai
    await wrapper.find('input[type="text"]').setValue('Dina');  // Nama Penerima
    await wrapper.findAll('input[type="text"]')[1].setValue('0812345678'); // Nomor HP
    await wrapper.find('textarea').setValue('Jl. Melati No. 5'); // Alamat Lengkap

    // Men-trigger submit form
    await wrapper.find('form').trigger('submit.prevent');
    await flushPromises(); // Menunggu promise selesai

    // Verifikasi apakah fetch dipanggil dan routing ke halaman /riwayat
    expect(fetch).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith('/riwayat');
  });
});
