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
  @font-face{
    font-family: 'OpenSans-Regular';
    src: url('assets/fonts/OpenSans-Regular.ttf');
  }

  @font-face{
    font-family: 'OpenSans-Light';
    src: url('assets/fonts/OpenSans-Light.ttf');
  }

  body {
    font-family: 'OpenSans-Regular';
    background-color: #EFEFEF;
    color: #646464;
  }

  h1 {
      margin: 0;
  }

  h5{
    margin: 0;
    font-family: 'OpenSans-Light';
  }

  // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {

}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {

  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {

 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {

 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

 }
</style>
