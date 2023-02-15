<template>
  <div class="container">
    <div v-if="user" class="mb-3">
      halo, {{ user.email }} <br />
      <nuxt-link to="/admin" class="btn btn-primary me-2">Tambah</nuxt-link>
      <button @click="keluar()" class="btn btn-danger">Keluar</button>
    </div>
    <table class="table">
      <thead>
        <tr class="bg-primary text-white">
          <td>NO</td>
          <td>NAMA</td>
          <td>tanggal</td>
          <td>KETERANGAN</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(info, i) in datas" :key="info.id">
          <td>{{ i + 1 }}.</td>
          <td>{{ info.id_anggota && info.id_anggota.nama }}</td>
          <td>{{ info.tanggal }}</td>
          <td v-if="info.keterangan">Hadir Piket</td>
          <td v-else>Tidak Piket</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const datas = ref([]);

async function getData() {
  const { data, error } = await supabase.from("kehadiran").select(`keterangan,tanggal,id_anggota(nama)`);

  datas.value = data;
}

async function keluar() {
  await client.auth.signOut();
  navigateTo("/login");
}

onMounted(() => {
  getData();
});
</script>
