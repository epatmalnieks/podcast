<template>
<div>
  <div class="navButtonContainer" @click='goToArchive'>
    <div class="navButton" :class="{navButtonSelected: selectedRoute === 'archive'}">Archive</div>
  </div>
  <div class="navButtonContainer" @click='goToBios'>
    <div class="navButton" :class="{navButtonSelected: selectedRoute === 'bios'}">Bios</div>
  </div>
  <div class="navButtonContainer" @click='goToHome'>
    <div class="navButton" :class="{navButtonSelected: selectedRoute === '/'}">Home</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      selectedRoute: '/',
    };
  },
  methods: {
    goToBios() {
      this.$router.push({
        name: 'bios',
      });
      this.selectedRoute = 'bios';
    },
    goToArchive() {
      this.$router.push({
        name: 'archive',
      });
      this.selectedRoute = 'archive';
    },
    goToHome() {
      this.$router.push({
        name: 'home',
      });
      this.selectedRoute = '/';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/nav.scss";
</style>
