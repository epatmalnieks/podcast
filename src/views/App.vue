<template>
  <div id="app">
    <nav-component></nav-component>
    <div class="slogan">
      <p>A podcast with 78% sports and 22% nonsense.</p>
    </div>
    <h1 style="display:none">78% Sports</h1>
    <img class="logo" alt="78% Sports" src="../assets/images/78percentsports.png"/>
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
