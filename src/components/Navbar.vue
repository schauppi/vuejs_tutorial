<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">PGMON+</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only"></nav>
        <a class="mdl-navigation__link"
          ><router-link to="/login">Login</router-link></a
        >
        <a class="mdl-navigation__link"
          ><router-link to="/">Home</router-link></a
        >
      </div>
    </header>

    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">PGMON+</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link"
          ><router-link to="/login">Login</router-link></a
        >
        <a class="mdl-navigation__link"
          ><router-link to="/">Home</router-link></a
        >
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
