<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @font-face{
    font-family: 'Raleway-Regular';
    src: url('assets/fonts/Raleway-Regular.ttf');
  }

  body {
    font-family: 'Raleway-Regular';
  }

  // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  body {
    background-color: blue;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  body {
    background-color: red;
  }
  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  body {
    background-color: yellow;
  }
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
  body {
    background-color: green;
  }
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  body {
    background-color: pink;
  }
 }
</style>
