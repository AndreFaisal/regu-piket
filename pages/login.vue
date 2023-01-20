<template>
  <div>
    <form @submit.prevent="signin">
      <input type="email" v-model="email" class="form-control" /><br />
      <input type="password" v-model="password" />
      <button type="submit">login</button>
      <NuxtLink to="/">kembali</NuxtLink>
    </form>
  </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient();
const email = ref();
const password = ref();
async function signin() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  // console.log(data);
  navigateTo("/admin");
}
</script>
