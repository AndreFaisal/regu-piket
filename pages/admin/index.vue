<template>
  <div>
    <h1>Isi Kehadiran Piket</h1>
    <form @submit.prevent="simpan()">
      <select v-model="nama">
        <option v-for="a in anggota" :key="a.id" :value="a.id">{{ a.nama }}</option>
      </select> <br />
      <input v-model="keterangan" type="checkbox" /> <br />
      <button type="submit">kirim</button>
      <NuxtLink to="/">kembali</NuxtLink>
    </form>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const nama = ref();
const keterangan = ref();
const anggota = ref([])

async function simpan() {
  await supabase.from("kehadiran").insert({
    keterangan: keterangan.value,
    id_anggota: nama.value,
  });
  navigateTo("/admin/data");
}


async function ambilAnggota() {
  const { data, error } = await supabase
  .from("anggota")
  .select()
  anggota.value = data
}

onMounted(() => {
  ambilAnggota()
})
</script>
