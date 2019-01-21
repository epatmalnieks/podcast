<template>
  <div>
    <button @click='goToBios'>Bios</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    goToBios() {
      this.$router.push({ name: 'bios' });
    },
  },
};
</script>
