<template>
  <div id="app" class="app">
    <header id="nav" class="nav-bar">
      <Navbar />
    </header>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style></style>
