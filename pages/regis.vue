<template>
  <div>
    <form @submit.prevent="signup">
      <input type="email" v-model="email" /><br />
      <input type="password" v-model="password" />
      <button type="submit">Daftar</button>
    </form>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const email = ref();
const password = ref();
async function signup() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });
}
</script>
