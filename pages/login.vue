<template>
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <div v-if="err" class="alert alert-danger">Email/password salah</div>
      <form @submit.prevent="signin">
        <div class="mb-3">
          <label for="">email</label>
          <input type="email" v-model="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="">password</label>
          <input type="password" v-model="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary me-2">login</button>
        <NuxtLink to="/" class="btn btn-danger">kembali</NuxtLink>
      </form>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient();
const email = ref();
const password = ref();
const err = ref(false);
async function signin() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  // console.log(data);
  if (data) navigateTo("/admin");
  if (error) err.value = true;
}
</script>
