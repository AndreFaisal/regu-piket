<template>
  <div class="row">
    <div class="col-md-6">
      <h1>Isi Kehadiran Piket</h1>
      <form @submit.prevent="simpan()">
        <div class="mb-3">
          <label for="">Nama siswa</label>
          <select v-model="nama" class="form-select">
            <option v-for="a in anggota" :key="a.id" :value="a.id">{{ a.nama }}</option>
          </select>
        </div>
        <div class="mb-3">
          <div class="form-check form-switch">
            <input v-model="keterangan" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              <span v-if="keterangan">hadir</span>
              <span v-else>tidak hadir</span>
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary me-2">kirim</button>
        <NuxtLink to="/admin/data" class="btn btn-danger">kembali</NuxtLink>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
const supabase = useSupabaseClient();
const nama = ref();
const keterangan = ref(true);
const anggota = ref([]);

async function simpan() {
  await supabase.from("kehadiran").insert({
    keterangan: keterangan.value,
    id_anggota: nama.value,
  });
  navigateTo("/admin/data");
}

async function ambilAnggota() {
  const { data, error } = await supabase.from("anggota").select();
  anggota.value = data;
}

onMounted(() => {
  ambilAnggota();
});
</script>
