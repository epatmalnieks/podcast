<template>
  <div>
    <button @click='goBack'>Go Back</button>
    <p>This is the archive.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Archive',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
