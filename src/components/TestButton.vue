<template>
  <button
    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
    @click="$router.push({ path: route })"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "TestButton",
  props: {
    text: {
      type: String,
      default: "",
    },
    route: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
button {
  margin: 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
