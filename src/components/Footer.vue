<template>
  <footer>
    <div class="footerSection">
      <div class="navbar-brand">
        <router-link class="navbar-logo" to="/">
          <img src="../assets/footerlogo.png" />
        </router-link>
      </div>

      <div class="tableIntro" style="color: white">
        Copyright 2022 Universe. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  font-size: 12px;
  font-weight: 400;
  height: 372px;
  background-color: #222222;
  width: 100%;
}
footer div .navbar-logo img {
  width: 183px;
}
.footerSection {
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;

}
.navbar-logo{
  margin: 0 auto;

}
</style>