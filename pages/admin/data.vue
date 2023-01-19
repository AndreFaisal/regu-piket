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
      <tbody>
        <tr v-for="(info, i) in datas " :key="info.id">
          <td>{{ i   }}</td>
          <td>{{ info.id_anggota.nama }}</td>
          <td>{{ info.tanggal }}</td>
          <td v-if="info.keterangan">Hadir</td>
          <td v-else>Tidak</td>
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
    .select(`keterangan, id_anggota(nama), tanggal
    `)
 
    datas.value=data
  }
onMounted(()=>{
  getData()
})
</script>
