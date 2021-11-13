<template>
<div id="navbar">
  <Navbar />
  <Map />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Map from "@/components/Map.vue";

export default {
  name: "App",
  components: {
    Navbar, Map,
  },
};
</script>
