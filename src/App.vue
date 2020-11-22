<template>
  <div id="app">
    <div class="site-wrapper">
      <div class="splash-wrapper">
        <div class="vmcs-logo-wrapper">
          <img class="img-fluid vmcs-logo-main" alt="Vincent Massey Computer Science Club logo" src="./assets/vmcs-logo-vector.svg">
        </div>

        <h3>Vincent Massey Computer Science Club</h3>
        <p>We are a group of students from Vincent Massey Secondary School who are passionate about computer science.</p>
        <p class="text-center social-link-collection">
          <a class="social-link" href="https://party.vmcs.club"><font-awesome-icon icon="gavel"></font-awesome-icon> DOMJudge</a>
          <a class="social-link" href="#"><font-awesome-icon icon="cubes"></font-awesome-icon> 7 Week Challenge</a>
        </p>
      </div>
    </div>

    <div class="footer">
      <p class="text-center social-link-collection">
        <a class="social-link" href="https://watch.vmcs.club"><font-awesome-icon :icon="['fab', 'youtube']"></font-awesome-icon></a>
        <a class="social-link" href="https://github.com/VMCSC"><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></a>
        <a class="social-link" href="mailto:hello@vmcs.club"><font-awesome-icon icon="envelope"></font-awesome-icon></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
