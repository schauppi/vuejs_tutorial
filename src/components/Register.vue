<template>
  <div class="mdl-grid">
    <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
      <main class="mdl-layout__content mdl-grid center-items">
        <div class="mdl-card mdl-shadow--6dp">
          <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
            <h2 class="mdl-card__title-text">Regiser</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <form action="#">
              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" id="name" />
                <label class="mdl-textfield__label" for="name">Name</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" id="email" />
                <label class="mdl-textfield__label" for="email">Email</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield">
                <input
                  class="mdl-textfield__input"
                  type="password"
                  id="userpass"
                />
                <label class="mdl-textfield__label" for="userpass"
                  >Password</label
                >
              </div>
              <div class="mdl-textfield mdl-js-textfield">
                <input
                  class="mdl-textfield__input"
                  type="password"
                  id="cnfuserpass"
                />
                <label class="mdl-textfield__label" for="cnfuserpass"
                  >Confirm Password</label
                >
              </div>
            </form>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <button
              class="
                mdl-button mdl-button--colored
                mdl-js-button mdl-js-ripple-effect
              "
            >
              Register
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style>
</style>
