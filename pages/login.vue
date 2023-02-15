<template>
  <div>
<<<<<<< HEAD
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
=======
    <form @submit.prevent="signin">
      <input type="email" v-model="email" class="form-control" /><br />
      <input type="password" v-model="password" />
      <button type="submit">login</button>
      <NuxtLink to="/">kembali</NuxtLink>
    </form>
>>>>>>> 07aa51b2e28acd0710f6e4c0ef819853669abf04
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
