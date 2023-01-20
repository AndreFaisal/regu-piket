<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr class="bg-primary text-light">
          <td>NO</td>
          <td>NAMA</td>
          <td>tanggal</td>
          <td>KETERANGAN</td>
        </tr>
      </thead>
      <tbody class="text-light">
        <tr v-for="(info, i) in datas " :key="info.id">
          <td>{{ i }}</td>
          <td>{{ info.id_anggota && info.id_anggota.nama}}</td>
          <td>{{ info.tanggal }}</td>
          <td v-if="info.keterangan">Hadir Piket</td>
          <td v-else>Tidak Piket</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script setup>
  const supabase = useSupabaseClient()
  const datas = ref([])

async function getData(){
    const{data,error}= await supabase
    .from("kehadiran")
    .select(`keterangan,tanggal,id_anggota(nama)`)
 
    datas.value=data
    console.log(data)
  }
onMounted(()=>{
  getData()
})
</script>
