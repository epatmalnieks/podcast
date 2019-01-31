<template>
  <div class="nav">
    <button class="navButton" :class="selectedRoute === '/' ? 'navButtonSelected' : ''" @click='goToHome'>Home</button>
    <button class="navButton" :class="selectedRoute === 'bios' ? 'navButtonSelected' : ''" @click='goToBios'>Bios</button>
    <button class="navButton" :class="selectedRoute === 'archive' ? 'navButtonSelected' : ''" @click='goToArchive'>Archive</button>
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
      this.$router.push({ name: 'bios' });
      this.selectedRoute = 'bios';
    },
    goToArchive() {
      this.$router.push({ name: 'archive' });
      this.selectedRoute = 'archive';
    },
    goToHome() {
      this.$router.push({ name: 'home' });
      this.selectedRoute = '/';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/nav.scss";
</style>
