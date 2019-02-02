<template>
  <div id="app">
    <nav-component></nav-component>
    <img class="logo" alt="78% Sports" src="../assets/images/78percentsports.png"/>
    <h4>A podcast containing 78% sports and 22% nonsense.</h4>
    <router-view/>
  </div>
</template>

<script>
import NavComponent from '@/components/Nav.vue';

export default {
  name: 'Nav',
  components: {
    NavComponent,
  },
};
</script>

<style lang="scss">
@import "../styles/views/app.scss";
</style>
