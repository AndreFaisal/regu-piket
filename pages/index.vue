<template>
  <div>
    <h1>p</h1>
    <button @click="signout">keluar</button>
  </div>
</template>
<script setup>
const supabase = useSupabaseAuthClient;
function signout() {
  const { error } = supabase.auth.signOut();
}
</script>
