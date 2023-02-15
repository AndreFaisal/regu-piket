<template>
  <div>
    <div class="col-md-4 m-auto card p-3 mt-5 bg-success">
      <h3 class="text-center fw-bolder text-dark">LOGIN</h3>

      <form @submit.prevent="reg">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <!-- <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" /> -->
        </div>
        <button type="submit" class="btn btn-info me-3 text-white">Login</button>
        <button type="submit" class="btn btn-warning">
          <NuxtLink to="/regis">SignUp</NuxtLink>
        </button>
      </form>
    </div>
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
