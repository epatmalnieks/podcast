<template>
  <div id="app">
    <nav-component></nav-component>
    <h1>78% Sports</h1>
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
@import "styles/app.scss";
</style>
