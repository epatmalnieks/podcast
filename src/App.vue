<template>
  <div id="app">
    <nav-component></nav-component>
    <h1>78% Sports</h1>
    <h5>A podcast containing 78% sports and 22% nonsense.</h5>
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
@import "styles/app.scss";
</style>
