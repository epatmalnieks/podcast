<template>
<div>
    <img class="navHamburger" @click="showMenu" src="../assets/images/menu.png"/>
  <div v-if="menuVisible" class="navMenu">
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === '/'}" @click='goToHome'>
      Home
    </div>
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === 'allPodcasts'}" @click='goToAllPodcasts'>
      All Podcasts
    </div>
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === 'bios'}" @click='goToBios'>
      Bios
    </div>
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === 'contactUs'}" @click='goToContactUs'>
      Contact Us
    </div>
    <div class="navMenuItem" :class="{navButtonSelected: selectedRoute === 'shop'}" @click='goToShop'>
      Shop
    </div>
  </div>
  <!-- <div class="navButtonContainer" @click='goToAllPodcasts'>
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
  </div> -->
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
      this.showMenu();
    },
    goToAllPodcasts() {
      this.$router.push({
        name: 'allPodcasts',
      });
      this.selectedRoute = 'allPodcasts';
      this.showMenu();
    },
    goToHome() {
      this.$router.push({
        name: 'home',
      });
      this.selectedRoute = '/';
      this.showMenu();
    },
    goToContactUs() {
      this.$router.push({
        name: 'contactUs',
      });
      this.selectedRoute = 'contactUs';
      this.showMenu();
    },
    goToShop() {
      this.$router.push({
        name: 'shop',
      });
      this.selectedRoute = 'shop';
      this.showMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/nav.scss";
</style>
