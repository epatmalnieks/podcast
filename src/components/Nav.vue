<template>
<div>
  <img class="navHamburger" @click="showMenu(true)" src="../assets/images/menu.png"/>
  <div ref="navMenu" class="navMenu">
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
    };
  },
  methods: {
    showMenu(menuVisible) {
      if(menuVisible)
      {
        var elem = this.$refs.navMenu;
        elem.style.display = 'block';
       var pos = 100;
       var id = setInterval(frame, 10);
       function frame() {
         if (pos == 50) {
           this.menuVisible = true;
           clearInterval(id);
         } else {
           pos = pos - 5;
           elem.style.left = pos + '%';
         }
       }
     }

     if(!menuVisible)
     {
       var elem = this.$refs.navMenu;
      elem.style.display = 'none';
    }
    },
    goToBios() {
      this.$router.push({
        name: 'bios',
      });
      this.selectedRoute = 'bios';
      this.showMenu(false);
    },
    goToAllPodcasts() {
      this.$router.push({
        name: 'allPodcasts',
      });
      this.selectedRoute = 'allPodcasts';
      this.showMenu(false);
    },
    goToHome() {
      this.$router.push({
        name: 'home',
      });
      this.selectedRoute = '/';
      this.showMenu(false);
    },
    goToContactUs() {
      this.$router.push({
        name: 'contactUs',
      });
      this.selectedRoute = 'contactUs';
      this.showMenu(false);
    },
    goToShop() {
      this.$router.push({
        name: 'shop',
      });
      this.selectedRoute = 'shop';
      this.showMenu(false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/nav.scss";
</style>
