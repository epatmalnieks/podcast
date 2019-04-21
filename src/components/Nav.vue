<template>
<div>
  <button class="navHamburger" @click="showMenu">
Hamburger
  </button>
  <div v-if="menuVisible" class="navMenu">
    <button class="navHamburger" @click="showMenu">
  Hamburger
    </button>
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === '/'}" @click='goToHome'>
      Home
    </div>
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === 'allPodcasts'}" @click='goToAllPodcasts'>
      All Podcasts
    </div>
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === 'bios'}" @click='goToBios'>
      Bios
    </div>
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === '/contactUs'}" @click='goToContactUs'>
      Contact Us
    </div>
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === '/shop'}" @click='goToShop'>
      Shop
    </div>
  </div>
  <div class="navButtonContainer" @click='goToAllPodcasts'>
    <div class="navButton" :class="{navButtonSelected: selectedRoute === 'allPodcasts'}">All Podcasts</div>
  </div>
  <div class="navButtonContainer" @click='goToBios'>
    <div class="navButton" :class="{navButtonSelected: selectedRoute === 'bios'}">Bios</div>
  </div>
  <div class="navButtonContainer" @click='goToHome'>
    <div class="navButton" :class="{navButtonSelected: selectedRoute === '/'}">Home</div>
  </div>
  <div class="navButtonContainer" @click='goToHome'>
    <div class="navButton" :class="{navButtonSelected: selectedRoute === '/'}">Contact Us</div>
  </div>
  <div class="navButtonContainer" @click='goToHome'>
    <div class="navButton" :class="{navButtonSelected: selectedRoute === '/'}">Shop</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      selectedRoute: '/',
      menuVisible: false,
    };
  },
  methods: {
    showMenu() {
      this.menuVisible = !this.menuVisible;
    },
    goToBios() {
      this.$router.push({
        name: 'bios',
      });
      this.selectedRoute = 'bios';
    },
    goToAllPodcasts() {
      this.$router.push({
        name: 'allPodcasts',
      });
      this.selectedRoute = 'allPodcasts';
    },
    goToHome() {
      this.$router.push({
        name: 'home',
      });
      this.selectedRoute = '/';
    },
    goToContactUs() {
      this.$router.push({
        name: 'contactUs',
      });
      this.selectedRoute = '/';
    },
    goToShop() {
      this.$router.push({
        name: 'shop',
      });
      this.selectedRoute = '/';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/nav.scss";
</style>
