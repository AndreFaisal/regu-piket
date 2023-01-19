<template>
  <div>
    <h1>jadwal piket</h1>
    <form @submit.prevent="simpan()">
      <input v-model="nama" placeholder="nama" /> <br />
      <input v-model="hari" placeholder="hari" /> <br />
      <button type="submit">kirim</button>
      <NuxtLink to="/">kembali</NuxtLink>
    </form>
  </div>
</template>

<script setup>

const supabase = useSupabaseClient()
const nama = ref();
const haria = ref();

async function simpan() {
  await supabase.from("kehadiran").insert({
    nama: nama.value,
    hari: hari.value,
  });
  navigateTo("/admin/data");
}
</script>
