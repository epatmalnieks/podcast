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

<style lang="scss">
.nav {
  float:right;
}

.navButton {
color: #646464;
background-color:#FFFFFF;
border: none;
height: 50px;
width: 70px;
text-align: center;
}

.navButtonSelected {
  color: #FFFFFF;
  background-color:#FFFFFF;
  border: none;
  height: 50px;
  width: 70px;
  text-align: center;
  background-color:#FF3B3F;
}
</style>
