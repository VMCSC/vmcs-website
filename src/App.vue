<template>
  <div id="app">
    <div :class="'site-wrapper' + getPageStateClass()">
      <div class="splash-wrapper">
        <div class="vmcs-logo-wrapper">
          <img class="img-fluid vmcs-logo-main" alt="Vincent Massey Computer Science Club logo" src="./assets/vmcs-logo-vector.svg" @click="toggleColorMode">
        </div>

        <h3>Vincent Massey Computer Science Club</h3>
        <p>A group of students from Vincent Massey Secondary School dedicated to creating opportunities for students to learn more about computer science and technology.</p>
        <p class="text-center social-link-collection">
          <!--a :class="'social-link' + getPageStateClass()" href="https://party.vmcs.club"><font-awesome-icon icon="gavel"></font-awesome-icon> DOMJudge</a-->
        </p>
      </div>
    </div>

    <div class="footer">
      <p class="text-center social-link-collection">
        <a :class="'social-link' + getPageStateClass()" href="https://watch.vmcs.club"><font-awesome-icon :icon="['fab', 'youtube']"></font-awesome-icon></a>
        <a :class="'social-link' + getPageStateClass()" href="https://github.com/VMCSC"><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></a>
        <a :class="'social-link' + getPageStateClass()" href="mailto:hello@vmcs.club"><font-awesome-icon icon="envelope"></font-awesome-icon></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      darkMode: false
    }
  },
  methods: {
    toggleColorMode(){
      this.darkMode = !this.darkMode;
    },
    getPageStateClass() {
      return this.darkMode ? ' dark-mode' : ''
    }
  }
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
